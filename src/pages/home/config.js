export const onLine = {
  module: 'EPIC Online：',
  context: 'Epitope Presenttation Integrated prediCtion, 简称EPIC。基于多肽疫苗的个体化免疫治疗是当今治疗癌症的有效手段，而抗原呈递的准确预测是设计出高效的多肽疫苗的关键，为此我们开发了这款软件。此外，该软件还可以用于其他T细胞表位的预测。EPICv2.0是基于EPICv1.0(原EPIC)的改进，增加了对中国人群常见分型A1101,A3201，B0702,B4402的新抗原预测支持，增加了同时预测多种分型图和多种长度的功能，准确率也比EPICv1.0有所提高。'
};

export const citaions = {
  module: 'Citations：',
  content: {
    title: 'For publicction of results, please cite',
    paragraph: [
      {
        content: [
          'NetMHCpan-4.0:Imporoved Peptide-MHC Class I Interaction Predictions Integrating Eluted Ligand and Peptide Binding Affinity Data',
          'Vanessa Jurtz,Sinu Paul,Massimo Andreatta,Paolo Marcatili,Bjoem Peters adn Morten NieIssen',
          'The Journal of Immunology(2017)ji700893;DOI:10.4049/jimmunol.1700893'
        ],
        relative: {
          panle: '',
          hrefs: [
            {
              text: 'Full text',
              href: '#'
            },
            {
              text: '[PDF]',
              href: '#'
            }
          ]
        }
      },
      {
        content: [
          'NetMHCpan-3.0:Imporoved prediction of binding to MHC class I molecules integrating information from multiple receptor and peptide length data sets Morten Nielsen and Massime Andreatta',
          'Genome Medicine(2016):8:33'
        ],
        relative: {
          panel: '',
          hrefs: [
            {
              text: 'Full text',
              href: '#'
            },
            {
              text: '[PDF]',
              href: '#'
            }
          ]
        }
      },
      {
        content: [
          'NetMHCpan-3.0:Imporoved prediction of binding to MHC class I molecules integrating information from multiple receptor and peptide length data sets Morten Nielsen and Massime Andreatta',
          'Genome Medicine(2016):8:33'
        ],
        relative: {
          panel: 'PMID：',
          hrefs: [
            {
              text: 'Full text',
              href: '#'
            },
            {
              text: '[PDF]',
              href: '#'
            }
          ]
        }
      }
    ]
  }
};

export const help = {
  module: 'Help：',
  table_list: [
    {
      label: 'Training data',
      download: '#'
    },
    {
      label: 'Test data',
      download: '#'
    },
    {
      label: 'EPIC data',
      download: '#'
    },
    {
      label: 'Document',
      download: '#'
    }
  ],
  contact: 'Contact us: p_XXX@genomics.cn'
};

export default {
  onLine,
  citaions,
  help
}
;
