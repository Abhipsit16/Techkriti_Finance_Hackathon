import os
from dotenv import load_dotenv
from langchain_experimental.agents import create_csv_agent, create_pandas_dataframe_agent
from langchain.prompts import ChatPromptTemplate, PromptTemplate
from langchain_groq import ChatGroq
import pandas as pd
import requests
from bs4 import BeautifulSoup

# Web scraping and data processing
url = "https://www.screener.in/company/TATASTEEL/"
response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
soup = BeautifulSoup(response.text, "html.parser")

# Process tables
financial_tables = []
for table in soup.select('table.data-table'):
    df = pd.read_html(str(table))[0]
    financial_tables.append(df)

combined_df = pd.concat(financial_tables)

combined_df=combined_df.drop_duplicates()


# Initialize agents
load_dotenv()
llm = ChatGroq(groq_api_key = os.getenv('GROQ_API_KEY'),
                model_name = "llama-3.1-8b-instant",
                temperature = 0,
               max_tokens = 6000)

csv_agent = create_pandas_dataframe_agent(llm=llm, verbose=True, allow_dangerous_code=True, df=combined_df)

# Analysis prompt
analysis_template = """Analyze this financial data:
- Identify trends in Sales, Expenses, and Profits
- The order of your working will be as follows :
1. If there are any anomalies in any row, just remove those rows
2. Now, replace the null values of the left columns using The fastest method possible.
3. Calculate the important features which are not in the dataframe, but the dataframe contain enough resources so, that you can make them.
You need to STRICTLY follow the above given order one by one.
- Ignore all the worthless columns like Raw PDF and duplicate columns
- Highlight all the key insights for investors
- Use simple language avoiding technical terms"""

analysis_result = csv_agent.invoke(analysis_template)

# Plotting prompt
plot_template = """Generate Python code to:
1. Import matplotlib and os
2. Create line plots for key metrics over time
3. Save plots to {current_directory}
4. Return file paths list

Example:
plt.plot(data['Time'], data['Sales'])
plt.savefig(os.path.join({current_directory}, 'sales_trend.png'))"""

plot_result = csv_agent.invoke(plot_template.format(current_directory='C:/Users/abhip/Desktop/Techy/Techkriti_Finance_Hackathon/finance/public/plots'))

print("Analysis:", analysis_result['output'])
print("Plots saved at:", plot_result['output'])