
# unanchacc-gpt

Welcome to the unanchacc-gpt, this is a conversational interface chatbot utilizing OpenAI's GPT-4o LLM as the backend engine.

## ⚡ Introduction

This repository provides a simple template for chatbot interface implementation, the backend chatbot provide streaming implementation. The chatbot  implements three types of tools:

- Code Interpreter (https://platform.openai.com/docs/assistants/tools/code-interpreter)
- File Search (https://platform.openai.com/docs/assistants/tools/file-search)
- Function calling (https://platform.openai.com/docs/assistants/tools/function-calling)

This implementation is a modification based on the publicly available Open AI implementation.

:heavy_exclamation_mark: **This repository code is not intended for direct use in production**. Do not use it as-is. It serves as a chatbot implementation. You should design a client/server chatbot architecture, refactor the code to fit your conversational experience requirements before considering it for any production deployment.


## :rocket: Setup

### 🌱  Install dependencies

```
npm install
```

### 🌱 Setting up env variables
You can use `.env` file for set the enviromental variables.
Create an OpenAI API key at https://platform.openai.com/account/api-keys
Create an OpenAI Assistant at https://platform.openai.com/assistants. Be sure to enable file search and code interpreter tools.

```
OPENAI_API_KEY=""
OPENAI_ASSISTANT_ID=""
```

## ✅ How to Use

:pushpin: Locally

This initializes the Unanchacc chatbot in your local environment.
```
npm run dev
```

Open the chatbot in your browser at [http://localhost:3000](http://localhost:3000).


## 🤖 Chatbot

The chatbot will appear as shown below—this is an example of its interface in the browser.

![Alt text](images/intro.png)
![Alt text](images/conversation.png)
