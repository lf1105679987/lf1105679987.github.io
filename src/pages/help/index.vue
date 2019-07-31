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
                <li class="circle">Accepted amino acid characters are (case sensitive): A C D E F G H I K L M N P Q R S T V W Y</li>
                <li class="circle">Up to 5000 peptides are permitted for a single run.</li>
                <li class="circle">Different HLA may have different peptide length restrictions, for example, EPIP can make predictions for 9,10,11 mer peptides of HLA-A0201, but 8,9 mer peptides of HLA-B5101. However, you can input peptides with arbitrary length, EPIP will skip the peptides automatically that it is not able to make predictions for.</li>
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
                <li class="circle">The expression level should be represented as TPM value</li>
                <li class="circle">Each peptide should have a corresonding expression value orderly</li>
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
                <li class="circle">If you want to make predictions for a specific allele, you can choose from the droplist.</li>
                <li class="circle">If you want to make predictions for multiple alleles at the same time, you can input the HLA alleles manually.</li>
              </ul>
            </div>

            <div class="module-block">
              <div class="title">4. Submit </div>
              <ul>
                <li class="circle">Clicking the “Submit” button will redirect to the history page that contains the latest 10 submissions. The top submission is the one you just submitted. The “Status” columns have 3 values: proceeding, success or failed. “Proceeding” means the backend is running and you should refresh the page after a while. “Failed” means this run is failed, which may result from inappropriate input, such as the peptide sequences containing invalid character(s). “Success” means this run is successful and you can click the “detail” on the “Detail” column to check the prediction results.</li>
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
                  <span>The “Polypeptide” and the “Allele” column show the peptide and the HLA allele you input, the “Score” column shows the predicted score of EPIP, the higher score means the higher possbility that the peptide can be presented. If the score is “NA”, it means that EPIP can not make predictions for this peptide.</span>
                </li>
              </ul>
            </div>

            <div class="module-block">
              <div class="title">2. Retrieve results</div>
              <ul>
                <li class="circle">You can download the results (csv format) directly.</li>
                <li class="circle">Send the results to a specific e-mail address.</li>
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
          text: 'EPIC',
          href: './client_index.html#EPIC'
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
