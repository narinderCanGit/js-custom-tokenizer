# Tokenizer CLI Tool

A simple Node.js CLI tool for encoding and decoding text into token IDs and vice versa.  
This project is built using ES Modules (`import` / `export`) syntax.

## 📂 Project Structure

tokenizer/
│
├── src/
│ ├── tokenizer.js # Core logic for encoding and decoding
│ ├── cli.js # CLI interface for user interaction
│
├── package.json
└── README.md

## ⚙️ Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn or pnpm (for installing dependencies)

---

## Installation

1. **Clone the repository:**
   git clone <your-repo-url>
   cd tokenizer
   pnpm install
   npm start

2. **Enter Text for Vocabulary**
    Enter text to train the tokenizer:
    hello world

3. **Encode Example**
    Enter text to encode: hello world
    Encoded IDs: 4, 5

4. **Decode Example**
    Enter token IDs to decode (comma-separated): 4, 5
    Decoded text: hello world
    
5. **Invalid Format Example**
    Enter token IDs to decode (comma-separated): 4 5
    ⚠️ Please enter token IDs separated by commas, e.g., 4,5

**Tokenizer Details**
    Special Tokens:
    <PAD>   → Padding
    <UNK>   → Unknown tokens
    <START> → Start of sequence
    <END>   → End of sequence
    Vocabulary is dynamic — it learns from the input you provide in the first step.

    Encoding replaces unknown words with <UNK> ID.
        

