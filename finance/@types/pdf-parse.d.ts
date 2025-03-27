declare module "pdf-parse" {
    interface PDFInfo {
      numpages: number;
      numrender: number;
      info: Record<string, any>;
      metadata: Record<string, any>;
      version: string;
    }
  
    interface PDFPage {
      pageInfo: Record<string, any>;
    }
  
    interface PDFParseResult {
      numpages: number;
      numrender: number;
      info: Record<string, any>;
      metadata: any;
      version: string;
      text: string;
    }
  
    function pdfParse(dataBuffer: Buffer): Promise<PDFParseResult>;
  
    export = pdfParse;
  }
  