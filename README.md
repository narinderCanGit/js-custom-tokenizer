# Tokenizer CLI Tool

A simple Node.js CLI tool for encoding and decoding text into token IDs and vice versa.  
This project uses ES Modules (`import` / `export`) syntax.

## Project Structure

```
tokenizer/
├── src/
│   ├── tokenizer.js    # Core logic for encoding and decoding
│   ├── cli.js          # CLI interface for user interaction
├── package.json
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm, yarn, or pnpm (for installing dependencies)

## Installation

```sh
git clone https://github.com/narinderCanGit/js-custom-tokenizer
cd tokenizer
pnpm install
npm start
```

## Usage

1. **Enter text for vocabulary**
   ```
   Enter text to learn vocab: hello world
   ```

2. **Encode example**
   ```
   Enter text to encode: hello world
   Encoded: [4, 5]
   ```

3. **Decode example**
   ```
   Enter token IDs to decode (comma-separated): 4,5
   Decoded: hello world
   ```

4. **Invalid format example**
   ```
   Enter token IDs to decode (comma-separated): 4 5
   Error: Please enter token IDs separated by commas (e.g., 4,5).
   ```

## Tokenizer Details

- Special Tokens:
  - `[PAD]`   – Padding
  - `[UNK]`   – Unknown tokens
  - `[CLS]`   – Start of sequence
  - `[SEP]`   – End of sequence
  - `[MASK]`  – Masked token
- Vocabulary is dynamic and learns from your input.
- Unknown words are replaced with `[UNK]` ID during encoding.