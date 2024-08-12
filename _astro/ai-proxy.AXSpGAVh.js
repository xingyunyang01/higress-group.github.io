const e="latest/en/plugins/ai/ai-proxy.md",o="docs",t="latest/en/plugins/ai/ai-proxy",n=`
## Function Description

The \`AI Proxy\` plugin implements AI proxy functionality based on the OpenAI API contract. It currently supports AI service providers such as OpenAI, Azure OpenAI, Moonshot, and Qwen.

> **Note:**

> When the request path suffix matches \`/v1/chat/completions\`, it corresponds to text-to-text scenarios. The request body will be parsed using OpenAI's text-to-text protocol and then converted to the corresponding LLM vendor's text-to-text protocol.

> When the request path suffix matches \`/v1/embeddings\`, it corresponds to text vector scenarios. The request body will be parsed using OpenAI's text vector protocol and then converted to the corresponding LLM vendor's text vector protocol.


## Configuration Fields

### Basic Configuration

| Name       | Data Type   | Requirement | Default | Description               |
|------------|--------|------|-----|------------------|
| \`provider\` | object | Required   | -   | Configures information for the target AI service provider |

**Details for the \`provider\` configuration fields:**

| Name           | Data Type        | Requirement | Default | Description                                                                                                                                                                                                                                                           |
| -------------- | --------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                  |
| \`type\`         | string          | Required     | -      | Name of the AI service provider                                                                                                                                                                                                                                              |
| \`apiTokens\`    | Array of string | Optional   | -      | Tokens used for authentication when accessing AI services. If multiple tokens are configured, the plugin randomly selects one for each request. Some service providers only support configuring a single token.                                                                                                                                     |
| \`timeout\`      | number          | Optional   | -      | Timeout for accessing AI services. Measured in milliseconds. The default value is 120000, equivalent to 2 minutes.                                                                                                                                                                                                 |
| \`modelMapping\` | Map of string   | Optional   | -      | Model Mapping Table for AI Models, used to map model names in requests to the names supported by service providers.<br/>1. Prefix Matching is Supported. For example, use "gpt-3-*" to match all models that start with "gpt-3-".<br/>2. Supports using "*" as a key for a generic fallback mapping relationship.<br/>3.  If the target name in the mapping is an empty string ("")**, it indicates that the original model name should be retained.|
| \`protocol\`     | string          | Optional   | -      | API contract provided by the plugin. Currently supports the following values: openai (default, uses OpenAI's API contract), original (uses the raw API contract of the target service provider)                                                                                                                          |
| \`context\`      | object          | Optional   | -      | Configures context information for AI conversations                                                                                                                                                                                                                                         |

**Details for the \`context\` configuration fields:**

| Name           | Data Type   | Requirement | Default | Description                               |
|---------------|--------|------|-----|----------------------------------|
| \`fileUrl\`     | string | Required   | -   | URL for storing AI conversation context. Only supports file content of plain text type |
| \`serviceName\` | string | Required   | -   | Full name of the Higress backend service corresponding to the URL |
| \`servicePort\` | number | Required   | -   | Port for accessing the Higress backend service corresponding to the URL |

### Provider-Specific Configurations

#### OpenAI

For OpenAI, the corresponding \`type\` is \`openai\`. Its unique configuration fields include:

| Name                   | Data Type | Filling Requirements | Default Value | Description                                                                                                 |
|-----------------------|-----------|----------------------|---------------|------------------------------------------------------------------------------------------------------------|
| \`openaiCustomUrl\`     | string    | Optional              | -             | A custom backend URL based on the OpenAI protocol, e.g., www.example.com/myai/v1/chat/completions          |

#### Azure OpenAI

For Azure OpenAI, the corresponding \`type\` is \`azure\`. Its unique configuration field is:

| Name                 | Data Type   | Filling Requirements | Default Value | Description                                                                                                    |
|---------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| \`azureServiceUrl\`   | string      | Required             | -             | The URL of the Azure OpenAI service, must include the \`api-version\` query parameter.                           |

**Note:** Azure OpenAI only supports configuring one API Token.

#### Moonshot

For Moonshot, the corresponding \`type\` is \`moonshot\`. Its unique configuration field is:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                                      |
|-------------------|-------------|----------------------|---------------|-----------------------------------------------------------------------------------------------------------------|
| \`moonshotFileId\`   | string      | Optional             | -             | The file ID uploaded via the file interface to Moonshot, whose content will be used as context for AI conversations. Cannot be configured with the \`context\` field. |

#### Qwen (Tongyi Qwen)

For Qwen (Tongyi Qwen), the corresponding \`type\` is \`qwen\`. Its unique configuration fields are:

| Name                 | Data Type            | Filling Requirements | Default Value | Description                                                                                                            |
|--------------------|-----------------|----------------------|---------------|------------------------------------------------------------------------------------------------------------------------|
| \`qwenEnableSearch\`  | boolean          | Optional             | -             | Whether to enable the built-in Internet search function provided by Qwen.                                             |
| \`qwenFileIds\`       | array of string   | Optional             | -             | The file IDs uploaded via the Dashscope file interface, whose content will be used as context for AI conversations. Cannot be configured with the \`context\` field. |

#### Baichuan AI

For Baichuan AI, the corresponding \`type\` is \`baichuan\`. It has no unique configuration fields.

#### Yi (Zero One Universe)

For Yi (Zero One Universe), the corresponding \`type\` is \`yi\`. It has no unique configuration fields.

#### Zhipu AI

For Zhipu AI, the corresponding \`type\` is \`zhipuai\`. It has no unique configuration fields.

#### DeepSeek

For DeepSeek, the corresponding \`type\` is \`deepseek\`. It has no unique configuration fields.

#### Groq

For Groq, the corresponding \`type\` is \`groq\`. It has no unique configuration fields.

#### ERNIE Bot

For ERNIE Bot, the corresponding \`type\` is \`baidu\`. It has no unique configuration fields.

#### Minimax

For Minimax, the corresponding \`type\` is \`minimax\`. Its unique configuration field is:

| Name             | Data Type | Filling Requirements | Default Value | Description                                                                                                 |
| ---------------- | -------- | --------------------- |---------------|------------------------------------------------------------------------------------------------------------|
| \`minimaxGroupId\` | string   | Required when using models \`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\` | -             | When using models \`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\`, Minimax uses ChatCompletion Pro and requires setting the groupID. |

#### Anthropic Claude

For Anthropic Claude, the corresponding \`type\` is \`claude\`. Its unique configuration field is:

| Name        | Data Type   | Filling Requirements | Default Value | Description                                                                                                    |
|------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| \`claudeVersion\` | string | Optional             | -             | The version of the Claude service's API, default is 2023-06-01.                                               |

#### Ollama

For Ollama, the corresponding \`type\` is \`ollama\`. Its unique configuration field is:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                              |
|-------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`ollamaServerHost\` | string      | Required             | -             | The host address of the Ollama server.                                                                |
| \`ollamaServerPort\` | number      | Required             | -             | The port number of the Ollama server, defaults to 11434.                                              |

#### Hunyuan

For Hunyuan, the corresponding \`type\` is \`hunyuan\`. Its unique configuration fields are:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                              |
|-------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`hunyuanAuthId\`    | string      | Required             | -             | Hunyuan authentication ID for version 3 authentication.                                                |
| \`hunyuanAuthKey\`   | string      | Required             | -             | Hunyuan authentication key for version 3 authentication.                                               |

#### Stepfun

For Stepfun, the corresponding \`type\` is \`stepfun\`. It has no unique configuration fields.

#### Cloudflare Workers AI

For Cloudflare Workers AI, the corresponding \`type\` is \`cloudflare\`. Its unique configuration field is:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                              |
|-------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`cloudflareAccountId\` | string      | Required             | -             | [Cloudflare Account ID](https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id). |

#### Spark

For Spark, the corresponding \`type\` is \`spark\`. It has no unique configuration fields.

The \`apiTokens\` field value for Xunfei Spark (Xunfei Star) is \`APIKey:APISecret\`. That is, enter your own APIKey and APISecret, separated by \`:\`.

#### Gemini

For Gemini, the corresponding \`type\` is \`gemini\`. Its unique configuration field is:

| Name                  | Data Type | Filling Requirements | Default Value | Description                                                                                              |
|---------------------|----------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`geminiSafetySetting\` | map of string   | Optional             | -             | Gemini AI content filtering and safety level settings. Refer to [Safety settings](https://ai.google.dev/gemini-api/docs/safety-settings). |

## Usage Examples

### Using OpenAI Protocol Proxy for Azure OpenAI Service

Using the basic Azure OpenAI service without configuring any context.

**Configuration Information**

\`\`\`yaml
provider:
  type: azure
  apiTokens:
    - "YOUR_AZURE_OPENAI_API_TOKEN"
  azureServiceUrl: "https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview",
\`\`\`

**Request Example**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Response Example**

\`\`\`json
{
  "choices": [
    {
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      },
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "Hello! I am an AI assistant, here to answer your questions and provide assistance. Is there anything I can help you with?",
        "role": "assistant"
      }
    }
  ],
  "created": 1714807624,
  "id": "chatcmpl-abcdefg1234567890",
  "model": "gpt-35-turbo-16k",
  "object": "chat.completion",
  "prompt_filter_results": [
    {
      "prompt_index": 0,
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      }
    }
  ],
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 40,
    "prompt_tokens": 15,
    "total_tokens": 55
  }
}
\`\`\`

### Using OpenAI Protocol Proxy for Qwen Service

Using Qwen service and configuring the mapping relationship between OpenAI large models and Qwen models.

**Configuration Information**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    'gpt-3': "qwen-turbo"
    'gpt-35-turbo': "qwen-plus"
    'gpt-4-turbo': "qwen-max"
    'gpt-4-*': "qwen-max"
    'text-embedding-v1': 'text-embedding-v1'
    '*': "qwen-turbo"
\`\`\`

**AI Dialogue Request Example**

URL: \`http://your-domain/v1/chat/completions\`

Request Body:

\`\`\`json
{
  "model": "text-embedding-v1",
  "input": "Hello"
}
\`\`\`

Response Body Example:

\`\`\`json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        -1.0437825918197632,
        5.208984375,
        3.0483806133270264,
        -1.7897135019302368,
        -2.0107421875,
        ...,
        0.8125,
        -1.1759847402572632,
        0.8174641728401184,
        1.0432943105697632,
        -0.5885213017463684
      ]
    }
  ],
  "model": "text-embedding-v1",
  "usage": {
    "prompt_tokens": 1,
    "total_tokens": 1
  }
}
\`\`\`

**Request Example**

URL: \`http://your-domain/v1/embeddings\`

Example Request Content:

\`\`\`json
{
    "model": "text-embedding-v1",
    "input": [
        "Hello world!"
    ]
}
\`\`\`

Example Response Content:

\`\`\`json
{
  "id": "c2518bd3-0f46-97d1-be34-bb5777cb3108",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I am Qwen, an AI assistant developed by Alibaba Cloud. I can answer various questions, provide information, and engage in conversations with users. What can I assist you with?"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1715175072,
  "model": "qwen-turbo",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 33,
    "total_tokens": 57
  }
}
\`\`\`

### Using Qwen Service with Pure Text Context Information

Using Qwen service while configuring pure text context information.

**Configuration Information**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-turbo"
  context:
    - fileUrl: "http://file.default.svc.cluster.local/ai/context.txt",
      serviceName: "file.dns",
      servicePort: 80
\`\`\`

**Request Example**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "Please summarize the content"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Response Example**

\`\`\`json
{
  "id": "cmpl-77861a17681f4987ab8270dbf8001936",
  "object": "chat.completion",
  "created": 9756990,
  "model": "moonshot-v1-128k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "The content of this document is about..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20181,
    "completion_tokens": 439,
    "total_tokens": 20620
  }
}
\`\`\`

### Using Qwen Service with Native File Context

Uploading files to Qwen in advance to use them as context when utilizing its AI service.

**Configuration Information**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-long" # Qwen's file context can only be used in the qwen-long model
  qwenFileIds:
  - "file-fe-xxx"
  - "file-fe-yyy"
\`\`\`

**Request Example**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please summarize the content"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Response Example**

\`\`\`json
{
  "output": {
    "choices": [
      {
        "finish_reason": "stop",
        "message": {
          "role": "assistant",
          "content": "You uploaded two files, \`context.txt\` and \`context_2.txt\`, which seem to contain information about..."
        }
      }
    ]
  },
  "usage": {
    "total_tokens": 2023,
    "output_tokens": 530,
    "input_tokens": 1493
  },
  "request_id": "187e99ba-5b64-9ffe-8f69-01dafbaf6ed7"
}
\`\`\`
### Utilizing Moonshot with its Native File Context

Upload files to Moonshot in advance and use its AI services based on file content.

**Configuration Information**

\`\`\`yaml
provider:
  type: moonshot
  apiTokens:
    - "YOUR_MOONSHOT_API_TOKEN"
  moonshotFileId: "YOUR_MOONSHOT_FILE_ID",
  modelMapping:
    '*': "moonshot-v1-32k"
\`\`\`

**Example Request**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please summarize the content"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Example Response**

\`\`\`json
{
  "id": "cmpl-e5ca873642ca4f5d8b178c1742f9a8e8",
  "object": "chat.completion",
  "created": 1872961,
  "model": "moonshot-v1-128k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "The content of the text is about a payment platform named \u2018xxxx\u2019..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 11,
    "completion_tokens": 498,
    "total_tokens": 509
  }
}
\`\`\`

### Using OpenAI Protocol Proxy for Groq Service

**Configuration Information**

\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
\`\`\`

**Example Request**

\`\`\`json
{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ]
}
\`\`\`

**Example Response**

\`\`\`json
{
  "id": "chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102",
  "object": "chat.completion",
  "created": 1715917967,
  "model": "llama3-8b-8192",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u{1F60A} Ni Hao! (That's \\"hello\\" in Chinese!)\\n\\nI am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I'm happy to chat with you in Chinese or help with any questions or topics you'd like to discuss! \u{1F60A}"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 16,
    "prompt_time": 0.005,
    "completion_tokens": 89,
    "completion_time": 0.104,
    "total_tokens": 105,
    "total_time": 0.109
  },
  "system_fingerprint": "fp_dadc9d6142",
  "x_groq": {
    "id": "req_01hy2awmcxfpwbq56qh6svm7qz"
  }
}
\`\`\`

### Using OpenAI Protocol Proxy for Claude Service

**Configuration Information**

\`\`\`yaml
provider:
  type: claude
  apiTokens:
    - "YOUR_CLAUDE_API_TOKEN"
  version: "2023-06-01"
\`\`\`

**Example Request**

\`\`\`json
{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ]
}
\`\`\`

**Example Response**

\`\`\`json
{
  "id": "msg_01Jt3GzyjuzymnxmZERJguLK",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello, I am a conversation system developed by Anthropic, a company specializing in artificial intelligence. My name is Claude, a friendly and knowledgeable chatbot. Nice to meet you! I can engage in discussions on various topics, answer questions, provide suggestions, and assist you. I'll do my best to give you helpful responses. I hope we have a pleasant exchange!"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1717385918,
  "model": "claude-3-opus-20240229",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 16,
    "completion_tokens": 126,
    "total_tokens": 142
  }
}
\`\`\`

### Using OpenAI Protocol Proxy for Hunyuan Service

**Configuration Information**

\`\`\`yaml
provider:
  type: "hunyuan"
  hunyuanAuthKey: "<YOUR AUTH KEY>"
  apiTokens:
    - ""
  hunyuanAuthId: "<YOUR AUTH ID>"
  timeout: 1200000
  modelMapping:
    "*": "hunyuan-lite"
\`\`\`

**Example Request**

Request script:

\`\`\`sh

curl --location 'http://<your higress domain>/v1/chat/completions' \\
--header 'Content-Type:  application/json' \\
--data '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "system",
      "content": "You are a professional developer!"
    },
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ],
  "temperature": 0.3,
  "stream": false
}'
\`\`\`

**Example Response**

\`\`\`json
{
    "id": "fd140c3e-0b69-4b19-849b-d354d32a6162",
    "choices": [
        {
            "index": 0,
            "delta": {
                "role": "assistant",
                "content": "Hello! I am a professional developer."
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1717493117,
    "model": "hunyuan-lite",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 15,
        "completion_tokens": 9,
        "total_tokens": 24
    }
}
\`\`\`

### Using OpenAI Protocol Proxy for ERNIE Bot Service

**Configuration Information**

\`\`\`yaml
provider:
  type: baidu
  apiTokens:
    - "YOUR_BAIDU_API_TOKEN"
  modelMapping:
    'gpt-3': "ERNIE-4.0"
    '*': "ERNIE-4.0"
\`\`\`

**Request Example**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "Hello, who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "as-e90yfg1pk1",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Hello, I am ERNIE Bot. I can interact with people, answer questions, assist in creation, and efficiently provide information, knowledge, and inspiration."
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1717251488,
    "model": "ERNIE-4.0",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 4,
        "completion_tokens": 33,
        "total_tokens": 37
    }
}
\`\`\`

### Using OpenAI Protocol Proxy for MiniMax Service

**Configuration Information**

\`\`\`yaml
provider:
  type: minimax
  apiTokens:
    - "YOUR_MINIMAX_API_TOKEN"
  modelMapping:
    "gpt-3": "abab6.5g-chat"
    "gpt-4": "abab6.5-chat"
    "*": "abab6.5g-chat"
  minimaxGroupId: "YOUR_MINIMAX_GROUP_ID"
\`\`\`

**Request Example**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "Hello, who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "02b2251f8c6c09d68c1743f07c72afd7",
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "message": {
                "content": "Hello! I am MM Intelligent Assistant, a large language model developed by MiniMax. I can help answer questions, provide information, and engage in conversations. How can I assist you?",
                "role": "assistant"
            }
        }
    ],
    "created": 1717760544,
    "model": "abab6.5s-chat",
    "object": "chat.completion",
    "usage": {
        "total_tokens": 106
    },
    "input_sensitive": false,
    "output_sensitive": false,
    "input_sensitive_type": 0,
    "output_sensitive_type": 0,
    "base_resp": {
        "status_code": 0,
        "status_msg": ""
    }
}
\`\`\`

### Using OpenAI Protocol Proxy for Cloudflare Workers AI Service

**Configuration Information**

\`\`\`yaml
provider:
  type: cloudflare
  apiTokens:
    - "YOUR_WORKERS_AI_API_TOKEN"
  cloudflareAccountId: "YOUR_CLOUDFLARE_ACCOUNT_ID"
  modelMapping:
    "*": "@cf/meta/llama-3-8b-instruct"
\`\`\`

**Request Example**

\`\`\`json
{
  "model": "gpt-3.5",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Who are you?"
    }
  ]
}
\`\`\`

**Response Example**

\`\`\`json
{
  "id": "id-1720367803430",
  "object": "chat.completion",
  "created": 1720367803,
  "model": "@cf/meta/llama-3-8b-instruct",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture."
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ]
}
\`\`\`

### Using OpenAI Protocol Proxy for Spark Service

**Configuration Information**

\`\`\`yaml
provider:
  type: spark
  apiTokens:
    - "APIKey:APISecret"
  modelMapping:
    "gpt-4o": "generalv3.5"
    "gpt-4": "generalv3"
    "*": "general"
\`\`\`

**Request Example**

\`\`\`json
{
    "model": "gpt-4o",
    "messages": [
        {
            "role": "system",
            "content": "You are a professional developer!"
        },
        {
            "role": "user",
            "content": "Hello, who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "cha000c23c6@dx190ef0b4b96b8f2532",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Hello! I am a professional developer skilled in programming and problem-solving. What can I assist you with?"
            }
        }
    ],
    "created": 1721997415,
    "model": "generalv3.5",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 10,
        "completion_tokens": 19,
        "total_tokens": 29
    }
}
\`\`\`

### Utilizing OpenAI Protocol Proxy for Gemini Services

**Configuration Information**

\`\`\`yaml
provider:
  type: gemini
  apiTokens:
    - "YOUR_GEMINI_API_TOKEN"
  modelMapping:
    "*": "gemini-pro"
  geminiSafetySetting:
    "HARM_CATEGORY_SEXUALLY_EXPLICIT" :"BLOCK_NONE"
    "HARM_CATEGORY_HATE_SPEECH" :"BLOCK_NONE"
    "HARM_CATEGORY_HARASSMENT" :"BLOCK_NONE"
    "HARM_CATEGORY_DANGEROUS_CONTENT" :"BLOCK_NONE"
\`\`\`

**Request Example**

\`\`\`json
{
    "model": "gpt-3.5",
    "messages": [
        {
            "role": "user",
            "content": "Who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities."
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1722756984,
    "model": "gemini-pro",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 29,
        "total_tokens": 34
    }
}
\`\`\`

## Full Configuration Example

### Kubernetes Example

Here's a full plugin configuration example using the OpenAI protocol proxy for Groq services.

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-proxy-groq
  namespace: higress-system
spec:
  matchRules:
  - config:
      provider:
        type: groq
        apiTokens:
          - "YOUR_API_TOKEN"
    ingress:
    - groq
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: HTTPS
    higress.io/destination: groq.dns
    higress.io/proxy-ssl-name: api.groq.com
    higress.io/proxy-ssl-server-name: "on"
  labels:
    higress.io/resource-definer: higress
  name: groq
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: <YOUR-DOMAIN>
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
---
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: api.groq.com
    name: groq
    port: 443
    type: dns
\`\`\`

Access Example:

\`\`\`bash
curl "http://<YOUR-DOMAIN>/v1/chat/completions" -H "Content-Type: application/json" -d '{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "hello, who are you?"
    }
  ]
}'
\`\`\`

### Docker-Compose Example

\`docker-compose.yml\` configuration file:

\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20
    entrypoint: /usr/local/bin/envoy
    # Enables debug level logging for easier debugging
    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug
    networks:
      - higress-net
    ports:
      - "10000:10000"
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
      - ./plugin.wasm:/etc/envoy/plugin.wasm
networks:
  higress-net: {}
\`\`\`

\`envoy.yaml\` configuration file:

\`\`\`yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                scheme_header_transformation:
                  scheme_to_overwrite: https
                stat_prefix: ingress_http
                # Outputs envoy logs to stdout
                access_log:
                  - name: envoy.access_loggers.stdout
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog
                # Modify as needed
                route_config:
                  name: local_route
                  virtual_hosts:
                    - name: local_service
                      domains: [ "*" ]
                      routes:
                        - match:
                            prefix: "/"
                          route:
                            cluster: claude
                            timeout: 300s
                http_filters:
                  - name: claude
                    typed_config:
                      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      value:
                        config:
                          name: claude
                          vm_config:
                            runtime: envoy.wasm.runtime.v8
                            code:
                              local:
                                filename: /etc/envoy/plugin.wasm
                          configuration:
                            "@type": "type.googleapis.com/google.protobuf.StringValue"
                            value: | # Plugin configuration
                              {
                                "provider": {
                                  "type": "claude",
                                  "apiTokens": [
                                    "YOUR_API_TOKEN"
                                  ]
                                }
                              }
                  - name: envoy.filters.http.router
  clusters:
    - name: claude
      connect_timeout: 30s
      type: LOGICAL_DNS
      dns_lookup_family: V4_ONLY
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: claude
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: api.anthropic.com # Service address
                      port_value: 443
      transport_socket:
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext
          "sni": "api.anthropic.com"
\`\`\`

Access Example:

\`\`\`bash
curl "http://localhost:10000/v1/chat/completions"  -H "Content-Type: application/json"  -d '{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "hello, who are you?"
    }
  ]
}'
\`\`\`
`,s={title:"AI Proxy",description:"Reference for configuring the AI Proxy plugin",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI Gateway","AI Proxy"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/ai-proxy.md",rawData:void 0};export{i as _internal,n as body,o as collection,s as data,e as id,t as slug};
