const papers = [
  {
    "title": "A Combined Segmentation and Classification Pipeline",
    "url": "https://doi.org/10.1088/1742-6596/2949/1/012003",
    "modality": "ultrasound",
    "summary": "Summary of A Combined Segmentation and Classification Pipeline",
    "results": "Accuracy: 90.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in A Combined Segmentation and Classification Pipeline",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Segmentation-Guided Ensemble Classification Framework",
    "url": "https://doi.org/10.1007/s13534-024-00435-7",
    "modality": "histopath",
    "summary": "Summary of Segmentation-Guided Ensemble Classification Framework",
    "results": "Accuracy: 91.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Segmentation-Guided Ensemble Classification Framework",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Review on DL Models for Breast Cancer Detection",
    "url": "https://doi.org/10.1109/ACCESS.2023.3322284",
    "modality": "mri",
    "summary": "Summary of Review on DL Models for Breast Cancer Detection",
    "results": "Accuracy: 92.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in Review on DL Models for Breast Cancer Detection",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "U-Net with Cross-Scale Attention (CSAM-U-Net)",
    "url": "https://doi.org/10.1109/TMI.2025.3191157",
    "modality": "tools",
    "summary": "Summary of U-Net with Cross-Scale Attention (CSAM-U-Net)",
    "results": "Accuracy: 93.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in U-Net with Cross-Scale Attention (CSAM-U-Net)",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Explainable AI for Breast Ultrasound",
    "url": "https://doi.org/10.1016/j.media.2024.103576",
    "modality": "ultrasound",
    "summary": "Summary of Explainable AI for Breast Ultrasound",
    "results": "Accuracy: 94.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in Explainable AI for Breast Ultrasound",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Multi-task U-Net for Segmentation + Classification",
    "url": "https://doi.org/10.1007/s11517-024-02861-3",
    "modality": "histopath",
    "summary": "Summary of Multi-task U-Net for Segmentation + Classification",
    "results": "Accuracy: 95.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Multi-task U-Net for Segmentation + Classification",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "BioCNN: Biologically Inspired CNN for BC Diagnosis",
    "url": "https://doi.org/10.1109/TCYB.2024.3311463",
    "modality": "mri",
    "summary": "Summary of BioCNN: Biologically Inspired CNN for BC Diagnosis",
    "results": "Accuracy: 96.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in BioCNN: Biologically Inspired CNN for BC Diagnosis",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Federated Learning for Breast Cancer MRI",
    "url": "https://doi.org/10.1016/j.jbi.2024.104267",
    "modality": "tools",
    "summary": "Summary of Federated Learning for Breast Cancer MRI",
    "results": "Accuracy: 97.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in Federated Learning for Breast Cancer MRI",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Temporal CNNs for Dynamic Breast MRI",
    "url": "https://doi.org/10.1109/TBME.2024.3315517",
    "modality": "ultrasound",
    "summary": "Summary of Temporal CNNs for Dynamic Breast MRI",
    "results": "Accuracy: 98.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in Temporal CNNs for Dynamic Breast MRI",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Dual-Branch CNN for Histology Classification",
    "url": "https://doi.org/10.1016/j.artmed.2024.102543",
    "modality": "histopath",
    "summary": "Summary of Dual-Branch CNN for Histology Classification",
    "results": "Accuracy: 99.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Dual-Branch CNN for Histology Classification",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "A Combined Segmentation and Classification Pipeline",
    "url": "https://doi.org/10.1088/1742-6596/2949/1/012003",
    "modality": "mri",
    "summary": "Summary of A Combined Segmentation and Classification Pipeline",
    "results": "Accuracy: 90.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in A Combined Segmentation and Classification Pipeline",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Segmentation-Guided Ensemble Classification Framework",
    "url": "https://doi.org/10.1007/s13534-024-00435-7",
    "modality": "tools",
    "summary": "Summary of Segmentation-Guided Ensemble Classification Framework",
    "results": "Accuracy: 91.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in Segmentation-Guided Ensemble Classification Framework",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Review on DL Models for Breast Cancer Detection",
    "url": "https://doi.org/10.1109/ACCESS.2023.3322284",
    "modality": "ultrasound",
    "summary": "Summary of Review on DL Models for Breast Cancer Detection",
    "results": "Accuracy: 92.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in Review on DL Models for Breast Cancer Detection",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "U-Net with Cross-Scale Attention (CSAM-U-Net)",
    "url": "https://doi.org/10.1109/TMI.2025.3191157",
    "modality": "histopath",
    "summary": "Summary of U-Net with Cross-Scale Attention (CSAM-U-Net)",
    "results": "Accuracy: 93.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in U-Net with Cross-Scale Attention (CSAM-U-Net)",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Explainable AI for Breast Ultrasound",
    "url": "https://doi.org/10.1016/j.media.2024.103576",
    "modality": "mri",
    "summary": "Summary of Explainable AI for Breast Ultrasound",
    "results": "Accuracy: 94.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in Explainable AI for Breast Ultrasound",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Multi-task U-Net for Segmentation + Classification",
    "url": "https://doi.org/10.1007/s11517-024-02861-3",
    "modality": "tools",
    "summary": "Summary of Multi-task U-Net for Segmentation + Classification",
    "results": "Accuracy: 95.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in Multi-task U-Net for Segmentation + Classification",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "BioCNN: Biologically Inspired CNN for BC Diagnosis",
    "url": "https://doi.org/10.1109/TCYB.2024.3311463",
    "modality": "ultrasound",
    "summary": "Summary of BioCNN: Biologically Inspired CNN for BC Diagnosis",
    "results": "Accuracy: 96.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in BioCNN: Biologically Inspired CNN for BC Diagnosis",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Federated Learning for Breast Cancer MRI",
    "url": "https://doi.org/10.1016/j.jbi.2024.104267",
    "modality": "histopath",
    "summary": "Summary of Federated Learning for Breast Cancer MRI",
    "results": "Accuracy: 97.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Federated Learning for Breast Cancer MRI",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Temporal CNNs for Dynamic Breast MRI",
    "url": "https://doi.org/10.1109/TBME.2024.3315517",
    "modality": "mri",
    "summary": "Summary of Temporal CNNs for Dynamic Breast MRI",
    "results": "Accuracy: 98.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in Temporal CNNs for Dynamic Breast MRI",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Dual-Branch CNN for Histology Classification",
    "url": "https://doi.org/10.1016/j.artmed.2024.102543",
    "modality": "tools",
    "summary": "Summary of Dual-Branch CNN for Histology Classification",
    "results": "Accuracy: 99.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in Dual-Branch CNN for Histology Classification",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "A Combined Segmentation and Classification Pipeline",
    "url": "https://doi.org/10.1088/1742-6596/2949/1/012003",
    "modality": "ultrasound",
    "summary": "Summary of A Combined Segmentation and Classification Pipeline",
    "results": "Accuracy: 90.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in A Combined Segmentation and Classification Pipeline",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Segmentation-Guided Ensemble Classification Framework",
    "url": "https://doi.org/10.1007/s13534-024-00435-7",
    "modality": "histopath",
    "summary": "Summary of Segmentation-Guided Ensemble Classification Framework",
    "results": "Accuracy: 91.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Segmentation-Guided Ensemble Classification Framework",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Review on DL Models for Breast Cancer Detection",
    "url": "https://doi.org/10.1109/ACCESS.2023.3322284",
    "modality": "mri",
    "summary": "Summary of Review on DL Models for Breast Cancer Detection",
    "results": "Accuracy: 92.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in Review on DL Models for Breast Cancer Detection",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "U-Net with Cross-Scale Attention (CSAM-U-Net)",
    "url": "https://doi.org/10.1109/TMI.2025.3191157",
    "modality": "tools",
    "summary": "Summary of U-Net with Cross-Scale Attention (CSAM-U-Net)",
    "results": "Accuracy: 93.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in U-Net with Cross-Scale Attention (CSAM-U-Net)",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Explainable AI for Breast Ultrasound",
    "url": "https://doi.org/10.1016/j.media.2024.103576",
    "modality": "ultrasound",
    "summary": "Summary of Explainable AI for Breast Ultrasound",
    "results": "Accuracy: 94.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in Explainable AI for Breast Ultrasound",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Multi-task U-Net for Segmentation + Classification",
    "url": "https://doi.org/10.1007/s11517-024-02861-3",
    "modality": "histopath",
    "summary": "Summary of Multi-task U-Net for Segmentation + Classification",
    "results": "Accuracy: 95.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Multi-task U-Net for Segmentation + Classification",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "BioCNN: Biologically Inspired CNN for BC Diagnosis",
    "url": "https://doi.org/10.1109/TCYB.2024.3311463",
    "modality": "mri",
    "summary": "Summary of BioCNN: Biologically Inspired CNN for BC Diagnosis",
    "results": "Accuracy: 96.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in BioCNN: Biologically Inspired CNN for BC Diagnosis",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Federated Learning for Breast Cancer MRI",
    "url": "https://doi.org/10.1016/j.jbi.2024.104267",
    "modality": "tools",
    "summary": "Summary of Federated Learning for Breast Cancer MRI",
    "results": "Accuracy: 97.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in Federated Learning for Breast Cancer MRI",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Temporal CNNs for Dynamic Breast MRI",
    "url": "https://doi.org/10.1109/TBME.2024.3315517",
    "modality": "ultrasound",
    "summary": "Summary of Temporal CNNs for Dynamic Breast MRI",
    "results": "Accuracy: 98.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in Temporal CNNs for Dynamic Breast MRI",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Dual-Branch CNN for Histology Classification",
    "url": "https://doi.org/10.1016/j.artmed.2024.102543",
    "modality": "histopath",
    "summary": "Summary of Dual-Branch CNN for Histology Classification",
    "results": "Accuracy: 99.00%",
    "details": {
      "dataset": "BreakHis",
      "methods": "Methodology used in Dual-Branch CNN for Histology Classification",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "A Combined Segmentation and Classification Pipeline",
    "url": "https://doi.org/10.1088/1742-6596/2949/1/012003",
    "modality": "mri",
    "summary": "Summary of A Combined Segmentation and Classification Pipeline",
    "results": "Accuracy: 90.00%",
    "details": {
      "dataset": "TCGA",
      "methods": "Methodology used in A Combined Segmentation and Classification Pipeline",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Segmentation-Guided Ensemble Classification Framework",
    "url": "https://doi.org/10.1007/s13534-024-00435-7",
    "modality": "tools",
    "summary": "Summary of Segmentation-Guided Ensemble Classification Framework",
    "results": "Accuracy: 91.00%",
    "details": {
      "dataset": "CBIS-DDSM",
      "methods": "Methodology used in Segmentation-Guided Ensemble Classification Framework",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  },
  {
    "title": "Review on DL Models for Breast Cancer Detection",
    "url": "https://doi.org/10.1109/ACCESS.2023.3322284",
    "modality": "ultrasound",
    "summary": "Summary of Review on DL Models for Breast Cancer Detection",
    "results": "Accuracy: 92.00%",
    "details": {
      "dataset": "BUSI Dataset",
      "methods": "Methodology used in Review on DL Models for Breast Cancer Detection",
      "applications": "Breast cancer classification",
      "challenges": "Model generalization and dataset variability"
    }
  }
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

    
