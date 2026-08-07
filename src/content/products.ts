import type { Product } from "./types";

/**
 * Products Scageon has built. v1: Local RAG only. Adding another later is a
 * data entry — the /product route already renders whichever is published.
 */
export const products: Product[] = [
  {
    slug: "local-rag",
    name: "Local RAG",
    eyebrow: "Local RAG",
    headline: "Your documents, understood — without leaving the machine.",
    sub: "A fully local AI search engine for your files — PDFs, spreadsheets, presentations, code — answered in plain English, with citations, entirely on your own hardware.",
    problem: [
      "Cloud AI assistants require uploading your documents to external servers — even with a privacy policy, that's a compliance event in regulated industries and a trust question everywhere else.",
      "Most teams accept the tradeoff anyway: recurring API costs, a dependency on the internet, and content that's technically left the building the moment it's queried.",
      "Local RAG removes the tradeoff entirely — **the model, the embeddings, and every file stay on your own hardware**.",
    ],
    whatItIs: [
      "Reads and understands PDFs, spreadsheets, presentations, code, and more — index once, ask anything in plain English.",
      "Every answer comes with citations — the exact file, page, and passage it came from, so you can verify, not just trust.",
      "Spreadsheet questions get their own path — the data loads into a local analytical engine that **writes SQL on the fly**.",
    ],
    howItWorks: [
      {
        title: "Watch & ingest",
        desc: "New and changed files are parsed, chunked, and embedded automatically; unchanged files skip in under a millisecond.",
      },
      {
        title: "Understand the question",
        desc: "Typo-corrected against your own vocabulary, classified, and split into sub-questions when it's genuinely complex.",
      },
      {
        title: "Retrieve & rerank",
        desc: "Hybrid semantic and keyword search, fused and reranked for relevance, not just similarity.",
      },
      {
        title: "Answer, with proof",
        desc: "The response streams from a local model, every claim traceable to its source.",
      },
    ],
    features: [
      {
        title: "Fully offline operation",
        desc: "Works without internet, even on air-gapped machines, after one-time setup.",
      },
      {
        title: "Multi-format ingestion",
        desc: "PDF, Word, Excel, PowerPoint, Markdown, and code, in one system.",
      },
      {
        title: "Hybrid retrieval + reranking",
        desc: "Semantic and keyword search fused together, then reranked for true relevance.",
      },
      {
        title: "Automatic spreadsheet SQL",
        desc: "Numerical questions are answered against your actual data, not approximations.",
      },
      {
        title: "OCR built in",
        desc: "Scanned documents become fully searchable, not dead weight.",
      },
      {
        title: "Custom-built pipeline",
        desc: "No LangChain, no LlamaIndex — every stage is purpose-built, visible, and tunable.",
      },
    ],
    techGroups: [
      { group: "Local LLM Inference", items: ["Ollama", "gemma2", "llama3.2", "phi4-mini"] },
      { group: "Retrieval", items: ["ChromaDB", "BM25", "Reciprocal Rank Fusion", "Cross-encoder reranking"] },
      { group: "Spreadsheet Intelligence", items: ["DuckDB"] },
      { group: "Embeddings", items: ["BAAI/bge-small-en-v1.5", "ONNX Runtime"] },
      { group: "Document Processing", items: ["PyMuPDF", "Tesseract OCR", "python-docx", "python-pptx"] },
      { group: "Application", items: ["FastAPI", "React", "Vite"] },
    ],
    relatedIndustries: ["healthcare", "banking-finance"],
    published: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const publishedProducts = () => products.filter((p) => p.published);
