export const onLine = {
  module: 'EPIP introduction：',
  context: 'EPIP stands for Epitope Presentation Integrated Prediction. It is a model that leverages peptide PSSM score, expression level and length to predict whether a peptide can be presented on the cell surface by MHC-I, which is a crucial step for activating CD8+ T-cell. The model is trained using more than 180,000 peptides identified by mass spectrometry (MS), and with the help of expression data, it can lead to a more accurate presentation prediction. To learn more information, please check our preprint paper <a href="https://www.biorxiv.org/content/10.1101/567081v1" target="_blank">here</a>.EPIP is available at <a href="https://github.com/BGI2016/EPIC"  target="_blank">https://github.com/BGI2016/EPIC</a>. '
};

export const citaions = {
  module: 'Citations：',
  content: {
    title: 'For publicction of results, please cite:',
    paragraph: [
      {
        content: [
          'Hu W, Qiu S, Li Y, et al. EPIC: MHC-I epitope prediction integrating mass spectrometry derived motifs and tissue-specific expression profiles[J]. bioRxiv, 2019: 567081.'
        ],
        relative: {
          panle: '',
          hrefs: [
            {
              text: '[PDF]',
              href: '#'
            }
          ]
        }
      },
      {
        content: [
          'Liu G, Li D, Li Z, et al. PSSMHCpan: a novel PSSM-based software for predicting class I peptide-HLA binding affinity[J]. Giga Science, 2017, 6(5): gix017.'
        ],
        relative: {
          panel: '',
          hrefs: [
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
    }
    // {
    //   label: 'EPIP data',
    //   download: '#'
    // },
    // {
    //   label: 'Document',
    //   download: '#'
    // }
  ],
  contact: 'Contact us: p_XXX@genomics.cn'
};

const allele = 'HLA-A0101,HLA-A0201,HLA-A0203,HLA-A0204,HLA-A0207,HLA-A0301,HLA-A2402,HLA-A2902,HLA-A3101,HLA-A6802,HLA-B3501,HLA-B4402,HLA-B4403,HLA-B5101,HLA-B5401,HLA-B5701,HLA-A1101,HLA-A3201,HLA-B0702,HLA-B1501,HLA-B4001,HLA-C0102,HLA-C0202,HLA-C0303,HLA-C0304,HLA-C0401,HLA-C0501,HLA-C0602,HLA-C0701,HLA-C0702,HLA-C0802,HLA-C1203,HLA-C1402,HLA-C1502,HLA-C1601,HLA-C1701,HLA-A2301,HLA-A2501,HLA-A2601,HLA-A2901,HLA-A6801,HLA-B0801,HLA-B1402,HLA-B1518,HLA-B1801,HLA-B2701,HLA-B2705,HLA-B3503,HLA-B3508,HLA-B3701,HLA-B3801,HLA-B3901,HLA-B3906,HLA-B3924,HLA-B4002,HLA-B4101,HLA-B4501,HLA-B4901,HLA-B5001,HLA-B5501,HLA-B5601,HLA-B7301,HLA-A3301,HLA-B1302,HLA-B1503,HLA-A3303';

export const getAlleleMap = () => {
  let list = [];
  allele.split(',').forEach(item => {
    const value = item.split('-')[1];
    const label = `${item.split('-')[0]}-${value.substr(0, 1)}*${value.substr(1, 2)}:${value.substr(3, 2)}:(${value.substr(0, 3)})`;
    list.push({
      label: label,
      value: value,
      val: item
    });
  });
  return list;
};

const peptides = '{"A0101":[9,10,11],"A0201":[9,10,11],"A0203":[9,10],"A0204":[9,10,11],"A0207":[9,10,11],"A0301":[9,10,11],"A2402":[9,10,11],"A2902":[9,10],"A3101":[9,10,11],"A6802":[9,10,11],"B3501":[9,10,11],"B4402":[9,10,11],"B4403":[9,10,11],"B5101":[8,9],"B5401":[9,10,11],"B5701":[9,10,11],"A1101":[9,10,11],"A3201":[9],"B0702":[9,10,11],"B1501":[9,10,11],"B4001":[9,10,11],"C0102":[8,9,10],"C0202":[8,9,10],"C0303":[9],"C0304":[8,9,10],"C0401":[8,9,10],"C0501":[8,9,10],"C0602":[9],"C0701":[9],"C0702":[8,9],"C0802":[8,9,10],"C1203":[8,9],"C1402":[8,9,10],"C1502":[8,9],"C1601":[8,9,10],"C1701":[8,9],"A2301":[9,10],"A2501":[9,10],"A2601":[9],"A2901":[9],"A6801":[9,10,11],"B0801":[8,9],"B1402":[9],"B1518":[8,9,10],"B1801":[8,9,10],"B2701":[9,10],"B2705":[9,10,11],"B3503":[9,10,11],"B3508":[9,10],"B3701":[9],"B3801":[9],"B3901":[8,9,10],"B3906":[8,9,10],"B3924":[8,9],"B4002":[9,10,11],"B4101":[9,10],"B4501":[9,10,11],"B4901":[9],"B5001":[9],"B5501":[9],"B5601":[9],"B7301":[9],"A3301":[8,9],"B1302":[9,10],"B1503":[9],"A3303":[9,10,11]}';
export const peptidesMap = JSON.parse(peptides);
export default {
  onLine,
  citaions,
  help
};
