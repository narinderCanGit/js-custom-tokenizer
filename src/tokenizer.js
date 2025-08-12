export default class Tokenizer {
  // Constructor initializes vocabularies and adds special tokens
  constructor(specialTokens = ["[PAD]", "[UNK]", "[CLS]", "[SEP]", "[MASK]"]) {
    this.vocab = {}; // Maps token string to token ID
    this.inverseVocab = {}; // Maps token ID back to token string
    this.specialTokens = specialTokens; // List of reserved tokens
    this.nextId = 0; // Next available token ID

    // Add each special token to vocab and inverseVocab
    for (const token of specialTokens) {
      this.addToken(token);
    }
  }

  // Adds a token to vocab if not already present
  addToken(token) {
    if (!(token in this.vocab)) {
      this.vocab[token] = this.nextId; // Assign next available ID
      this.inverseVocab[this.nextId] = token; // Map ID back to token
      this.nextId++;
    }
  }

  // Builds vocabulary from input text, skipping special tokens
  learnVocabFromText(text) {
    const words = text.split(/\s+/); // Split text into words by whitespace
    for (const word of words) {
      if (!this.specialTokens.includes(word)) {
        this.addToken(word); // Add word to vocab if not a special token
      }
    }
  }

  // Encodes text into array of token IDs
  encode(text) {
    const words = text.split(/\s+/); // Split text into words
    return words.map(word => this.vocab[word] ?? this.vocab["[UNK]"]); // Use [UNK] for unknown words
  }

  // Decodes array of token IDs back into text
  decode(tokenIds) {
    return tokenIds.map(id => this.inverseVocab[id] ?? "[UNK]").join(" "); // Use [UNK] for unknown IDs
  }

  // Returns the current vocabulary mapping
  getVocab() {
    return this.vocab;
  }
}
