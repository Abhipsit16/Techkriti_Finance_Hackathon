from langchain_experimental.agents import create_csv_agent
from langchain.agents import initialize_agent, Tool
from langchain_groq import ChatGroq
from langchain.chains import LLMChain
from langchain.prompts import ChatPromptTemplate,PromptTemplate
from langchain_community.utilities import DuckDuckGoSearchAPIWrapper
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_google_genai import ChatGoogleGenerativeAI
from pymongo import MongoClient
from fastapi import FastAPI
import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot

# Step 1: Fetch the webpage
url = "https://www.screener.in/company/TATASTEEL/"  # Replace with your target URL
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

response = requests.get(url, headers=headers)
if response.status_code != 200:
    raise Exception(f"Failed to fetch page. Status Code: {response.status_code}")

# Step 2: Parse the HTML
soup = BeautifulSoup(response.text, "html.parser")

# Step 3: Locate Financial Tables (Update class names based on inspection)
tables = soup.find_all("table", class_="data-table")  # Example class name

# Step 4: Extract Data from Tables
dataframes = []
for table in tables:
    # Extract table headers
    headers = []
    for th in table.find_all("th"):
        headers.append(th.text.strip())
    
    # Extract table rows
    rows = []
    for tr in table.find_all("tr")[1:]:  # Skip header row
        row = [td.text.strip() for td in tr.find_all("td")]
        if row:
            rows.append(row)
    
    # Convert to DataFrame
    df = pd.DataFrame(rows, columns=headers)
    dataframes.append(df)

# Step 5: Combine DataFrames and Save to CSV
if dataframes:
    combined_df = pd.concat(dataframes, ignore_index=True)
    combined_df.to_csv("screener_financial_data.csv", index=False)
    print("Data saved to screener_financial_data.csv")
else:
    print("No tables found.")



import os                                   
from dotenv import load_dotenv

# app=FastAPI()

# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

load_dotenv()
api_key=os.getenv('GEMINI_KEY')
# buf=io.BytesIO()
# Initialize LLM
# llm=ChatGroq(model="llama-3.3-70b-versatile", api_key=api_key)

user_id= "67e381f6394e76480a87c750"
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", api_key=api_key)
# Paths
current_directory = "C:/Users/abhip/Desktop/Techy/Techkriti_Finance_Hackathon/finance/public/plots"
csv_path = os.path.join(os.getcwd(), "CashflowsinCR.csv")
# data=pandas.read_csv(csv_path)
# data=data.T
# data.to_csv(csv_path)
# CSV Agent: Handles data analysis and plotting
csv_agent = create_csv_agent(llm, path=csv_path, verbose=True, allow_dangerous_code=True)

# Web Search Tool
# search = DuckDuckGoSearchRun(api_wrapper=DuckDuckGoSearchAPIWrapper())

# Analysis Prompt
analysis_prompt = PromptTemplate.from_template("""
    Perform a thorough analysis of the financial statement:

    {x}
    - Identify key trends and patterns.
    - Calculate important metrics (e.g., growth rate, profitability).
    - Highlight correlations between financial indicators.
    - Simplify insights for a common person.
    - Recommend actions based on the data.
    Generate a comprehensive yet simple report.
    """)

# Graph Plotting Prompt
graph_prompt = ChatPromptTemplate.from_messages([
    ("human", """
     Handle the null columns in a proper manner by deleting them, and delete the columns that can lead to key error.
    Plot the graphs you think are necessary while giving me an analysis of this statement.
    Save it to {current_directory} with a suitable filename in png format and return the array of filepaths.
    Do not standardize the data or overanalyze, just plot and return quickly.
    """),
], template_format="f-string")

# Agents
analysis_agent = analysis_prompt| csv_agent
graph_agent = graph_prompt | csv_agent

analysis=analysis_agent.invoke({"x":""})
content=analysis["output"]
print(content)

plot_result = graph_agent.invoke(input={"current_directory": current_directory})
print(plot_result)
client = MongoClient("mongodb://localhost:27017/")
db = client["techkriti"]
collection = db["analysis"]

analysis_doc = {
    "user_id":user_id,
    "content": content,
    "image_data": plot_result["output"]
}
inserted_id = collection.insert_one(analysis_doc).inserted_id

print("Plot Saved As:\n", plot_result)
