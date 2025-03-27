from langchain_experimental.agents import create_csv_agent
from langchain.agents import initialize_agent, Tool
from langchain_groq import ChatGroq
from langchain.chains import LLMChain
from langchain.prompts import ChatPromptTemplate,PromptTemplate
from langchain_community.utilities import DuckDuckGoSearchAPIWrapper
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_google_genai import ChatGoogleGenerativeAI
from pymongo import MongoClient
# import pandas as pd
# import matplotlib.pyplot as plt

import os                                   
from dotenv import load_dotenv

load_dotenv()
api_key=os.getenv('GEMINI_KEY')
# buf=io.BytesIO()
# Initialize LLM
# llm=ChatGroq(model="llama-3.3-70b-versatile", api_key=api_key)

user_id= "67e381f6394e76480a87c750"
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", api_key=api_key)
# Paths
current_directory = "C:/Users/abhip/Desktop/Projects/Dinosaur/dinosaurgame/dino/public/plots"
csv_path = os.path.join(os.getcwd(), "CashflowsinCR.csv")

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
