# OpenAI API Testing Environment

This project provides a setup for testing and experimenting with OpenAI's API and Azure OpenAI services. It includes sample prompts, request templates, and tools for monitoring API interactions.

## Project Structure

- **start_proxy.sh**: Shell script to start a mitmproxy Docker container for monitoring API requests.
- **requests.http**: HTTP request templates for making calls to both OpenAI and Azure OpenAI APIs.
- **simple_azure_request.json**: JSON template for Azure OpenAI API requests.
- **prompt_bike.md**: Example prompt for a bike recommendation assistant.
- **prompt_flowers.md**: Example prompt for a flower shop assistant.
- **dotenv_template**: Template for the required environment variables.
- **.env**: Configuration file containing API keys and endpoints (not tracked in git).

## Getting Started

1. Copy the `dotenv_template` to `.env` and fill in your API keys:
   ```
   OPENAI_API_KEY=sk-...
   AZURE_OPENAI_API_KEY=43...
   AZURE_OPENAI_URL=https://<yourserver>.openai.azure.com/
   ```

2. Use the HTTP request templates in `requests.http` to make API calls to OpenAI or Azure OpenAI.

3. To monitor API traffic, run the proxy server:
   ```
   ./start_proxy.sh
   ```
   This starts a mitmproxy Docker container that allows you to inspect the requests and responses.

## Example Prompts

The repository includes example prompts that demonstrate different use cases:

- **Bike Recommendation Assistant** (`prompt_bike.md`): A prompt for an AI assistant that helps customers find the right bike based on their needs.
- **Flower Shop Assistant** (`prompt_flowers.md`): A prompt for an AI assistant that acts as a salesperson in a flower shop, helping customers choose bouquets.

These prompts can be used with the API request templates to test different AI assistant scenarios.

## Requirements

- Docker (for running mitmproxy)
- REST client extension (for VS Code) or similar tool to execute the HTTP requests

## Notes

- The `.env` file contains sensitive API keys and is excluded from version control via `.gitignore`.
- Make sure to keep your API keys secure and never commit them to public repositories. 