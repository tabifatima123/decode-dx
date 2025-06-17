const papers = [
  {
    title: "A Combined Segmentation and Classification Pipeline",
    url: "https://doi.org/10.1088/1742-6596/2949/1/012003",
    modality: "ultrasound",
    summary: "Combines Deep Residual UNET for segmentation and VGG16 for classification.",
    results: "Improved accuracy (metrics not specified)",
    details: {
      dataset: "BUSI Dataset",
      methods: "Residual UNET + VGG16",
      applications: "Breast tumor classification",
      challenges: "Image variability, limited data"
    }
  },
  // Add more paper objects here using the same structure...
];

function createPaperCard(paper) {
  const article = document.createElement("article");

  article.innerHTML = `
    <h3><a href="${paper.url}" target="_blank">${paper.title}</a></h3>
    <p><strong>Modality:</strong> ${paper.modality.charAt(0).toUpperCase() + paper.modality.slice(1)}</p>
    <p><strong>Summary:</strong> ${paper.summary}</p>
    <p><strong>Results:</strong> ${paper.results}</p>
    <details>
      <summary><strong>Click for Full Details</strong></summary>
      <p><strong>Dataset:</strong> ${paper.details.dataset}</p>
      <p><strong>Methods:</strong> ${paper.details.methods}</p>
      <p><strong>Applications:</strong> ${paper.details.applications}</p>
      <p><strong>Challenges:</strong> ${paper.details.challenges}</p>
    </details>
  `;

  const containerId = `${paper.modality.toLowerCase()}-papers`;
  const container = document.getElementById(containerId);
  if (container) container.appendChild(article);
}

papers.forEach(createPaperCard);

