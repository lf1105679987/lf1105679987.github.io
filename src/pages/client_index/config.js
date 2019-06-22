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

const allele = 'HLA-A0101,HLA-A0201,HLA-A0203,HLA-A0204,HLA-A0207,HLA-A0301,HLA-A2402,HLA-A2902,HLA-A3101,HLA-A6802,HLA-B3501,HLA-B4402,HLA-B4403,HLA-B5101,HLA-B5401,HLA-B5701,HLA-A1101,HLA-A3201,HLA-B0702,HLA-B1501,HLA-B4001,HLA-C0102,HLA-C0202,HLA-C0303,HLA-C0304,HLA-C0401,HLA-C0501,HLA-C0602,HLA-C0701,HLA-C0702,HLA-C0802,HLA-C1203,HLA-C1402,HLA-C1502,HLA-C1601,HLA-C1701,HLA-A2301,HLA-A2501,HLA-A2601,HLA-A2901,HLA-A6801,HLA-B0801,HLA-B1402,HLA-B1518,HLA-B1801,HLA-B2701,HLA-B2705,HLA-B3503,HLA-B3508,HLA-B3701,HLA-B3801,HLA-B3901,HLA-B3906,HLA-B3924,HLA-B4002,HLA-B4101,HLA-B4501,HLA-B4901,HLA-B5001,HLA-B5501,HLA-B5601,HLA-B7301,HLA-A3301,HLA-B1302,HLA-B1503,HLA-A3303';

export const getAlleleMap = () => {
  let list = [];
  allele.split(',').forEach(item => {
    const value = item.split('-')[1];
    const label = `${item.split('-')[0]}-${value.substr(0, 1)}*${value.substr(1, 2)}:${value.substr(3, 2)}:(${value.substr(0, 3)})`;
    list.push({
      label: label,
      value: value
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
