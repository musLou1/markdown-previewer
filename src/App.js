import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const defaultMarkdown = `
# Heading (H1 size)

## Subheading (H2 size)

[This is a link](https://www.example.com)

Inline code: \`const example = 'example';\`

\`\`\`
Code block:
function example() {
  console.log('This is a code block');
}
\`\`\`

- List item

> Blockquote

![Alt text](https://via.placeholder.com/150)

**Bolded text**
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default App;
