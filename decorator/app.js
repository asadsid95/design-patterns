/* text processing to parse and transform text to uppercase, remove whitespace and adding line numbers

Requirements:

Define a base TextProcessor class with a method process(text) that takes a text string as input and returns the processed text.
Implement concrete text processors (e.g., UpperCaseProcessor, RemoveWhitespaceProcessor, LineNumberProcessor) that extend the base TextProcessor class and provide their own implementation of the process(text) method.
Create decorator classes for text processors that also extend the base TextProcessor class. These decorators should have a constructor that takes a TextProcessor instance as a parameter and overrides the process(text) method to apply additional processing.
Allow the decorators to be stacked in any order, allowing users to customize the processing of text content with various transformations.

*/

// base class
class TextProcessor {
  process(text) {
    return text;
  }
}

// concrete class for uppercase
class UpperCaseProcessor extends TextProcessor {
  process(text) {
    return text.toUpperCase();
  }
}

// decorator for combining text processors
class TextProcessorDecorator extends TextProcessor {
  constructor(processor) {
    super();
    this._processor = processor;
  }

  process(text) {
    return this._processor.process(text);
  }
}

const original_text = "This is wonderful for processing";
let processor = new TextProcessor();

processor = new TextProcessorDecorator(new UpperCaseProcessor(processor));

const processedText = processor.process(original_text);

console.log("Processed Text: ", processedText);
