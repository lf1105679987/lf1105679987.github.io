<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu :data="menu"></Menu>
        <div class="container">
          <div class="instructions">Usage instructions:</div>
          <div class="module">
            <div class="module-title">Submission</div>
            <div class="module-block">
              <div class="title">1. Peptide sequences</div>
              <ul>
                <li class="circle">All the input peptide sequences must be in one-letter amino acid code. The alphabet is as follows (case sensitive):A C D E F G H I K L M N P Q R S T V W Y</li>
                <li class="circle">Up to 5000 peptides per submission.</li>
                <li class="circle">Different HLA alleles may have different prediction limitations on peptide lengths. For example, EPIP can make predictions for 9- to 11-mer peptides on HLA-A0201, but only for 8-, to 9-mer peptides on HLA-B5101. However, you can input peptides with arbitrary length, EPIP will automatically skip the peptides which it is not able to make predictions for.</li>
                <li class="circle">
                  Input example:
                  <div>
                    <img src="./images/example1.png" alt="">
                  </div>
                </li>
              </ul>
            </div>

            <div class="module-block">
              <div class="title">2. Expression value</div>
              <ul>
                <li class="circle">The expression value should be provided as TPM (Transcript per Million). We recommend using RSEM to calculate TPM from RNA-seq data.</li>
                <li class="circle">Each expression value should correspond to a peptide. The expression list should be the same length and in the same order with the peptide list.</li>
                <li class="circle">
                  Input example:
                  <div style="padding-left: 11px;">
                    <img src="./images/example2.png" alt="">
                  </div>
                </li>
              </ul>
            </div>

            <div class="module-block">
              <div class="title">3. Select HLA allele</div>
              <ul>
                <li class="circle">You can choose one or multiple alleles you want to make predications from the pull-down menu.</li>
              </ul>
            </div>

            <div class="module-block">
              <div class="title">4. Submit </div>
              <ul>
                <li class="circle">Clicking the “Submit” button will redirect you to the history page that contains the latest 10 submissions. The top submission is the one you just submitted. The “Status” columns have 3 values: proceeding, success or failed. “Proceeding” means the backend is running and you could refresh the page after a while.“Failed” means this run is failed, which may result from inappropriate input, such as invalid characters in the peptide sequences. “Success” means this run is successful and you can click the “detail” on the “Detail” column to check the prediction results.</li>
              </ul>
            </div>

          </div>
          <div class="module">
            <div class="module-title">Result</div>
            <div class="module-block">
              <div class="title">1. Output format</div>
              <ul>
                <li class="circle">
                  <span>The output format example:</span>
                  <div style="padding-left: 10px;">
                    <img class="img3" src="./images/example3.png" alt="">
                  </div>
                  <span>The “Polypeptide” and the “Allele” column show the peptides and the HLA alleles you input, the “Score” column shows the predicted score of EPIP, higher score means higher possibility the peptide can be presented. “NA”  means EPIP cannot make predictions for this peptide.</span>
                </li>
              </ul>
            </div>

            <div class="module-block">
              <div class="title">2. Retrieve results</div>
              <ul>
                <li class="circle">You can download the results (csv format) directly or send the results to a specific e-mail address.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      menu: [
        {
          text: 'EPIP',
          href: './client_index.html#EPIP'
        },
        {
          text: 'Submission',
          href: './client_submission.html'
        },
        {
          text: 'Citation',
          href: './client_index.html#Citation'
        },
        {
          text: 'Help',
          href: './help.html'
        }
      ]
    };
  }
};
</script>
<style lang="scss" type="text/css">
@import './index.scss';
</style>
