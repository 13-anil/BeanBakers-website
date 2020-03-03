<template>
  <b-container class="bv-example-row">
    <b-row>

      <!-- Form area headings -->
      <b-col class="form-text col-md-12 col-lg">
        <h2> Yhteydenotto
          <h6>
            Ota yhteyttä, pyydä tarjous tai ehdota tapaamista.
          </h6>
        </h2>
      </b-col>

      <!-- Form starting area -->
      <b-col class="form-area col-md-12 col-lg-6">
        <form 
          v-if="show" 
          id="myForm"
          @submit.prevent="onSubmit">
        
          <!-- for generating form items -->
          <div 
            v-for="item in formJSON"
            :key="item.id"
            class="form-group row" >
            <label
              class="col-sm-2"> {{ item }} </label>
            <div class="col-sm-4">
              <input 
                type="text" 
                required >
            </div>  
          </div>

          <!-- for text area -->
          <div class="form-group row">
            <label class="col-sm-2"> Viesti </label>
            <div class="col-sm-4">
              <b-form-textarea
                v-model="form.text"
                placeholder="Kuvaile lyhyesti tarvisemaasi palvelua."
                rows="5"
                max-rows="5"/>
            </div>
          </div>

          <!-- for submit button -->
        </form>
        <div class="d-flex btn">
          <button
            form="myForm"
            type="submit"> Lähetä </button>
          <button 
            v-b-modal.modal-scrollable > Privacy Policy </button>

          <b-modal 
            id="modal-scrollable" 
            scrollable 
            title="Privacy Policy">
            <div 
              v-for="item in privacyPolicy" 
              :key="item.i">
              <h5> {{ item.head }} </h5>
              <p> {{ item.text }} </p>
            </div>
          </b-modal>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        formJSON: [ 'Nimi', 'Sähköposti', 'Puhelin' ],
        form: {
          email: '',
          name: '',
          phone: '',
          text: '',
        },
        show: true,
        privacyPolicy: [
          {
            head: 'What is Privacy Policy',
            text: 'A Privacy Policy is a legal statement that specifies what the business owner does with the personal data collected from users, along with how the data is processed and for what purposes.'
          },
          {
            head: 'Who needs a Privacy Policy?',
            text: 'Any entity (company or individual) that collects or uses personal information from users will need a Privacy Policy.'
          },
          {
            head: 'What is Privacy Policy',
            text: 'A Privacy Policy is a legal statement that specifies what the business owner does with the personal data collected from users, along with how the data is processed and for what purposes.'
          },
          {
            head: 'Who needs a Privacy Policy?',
            text: 'Any entity (company or individual) that collects or uses personal information from users will need a Privacy Policy.'
          },{
            head: 'What is Privacy Policy',
            text: 'A Privacy Policy is a legal statement that specifies what the business owner does with the personal data collected from users, along with how the data is processed and for what purposes.'
          },
          {
            head: 'Who needs a Privacy Policy?',
            text: 'Any entity (company or individual) that collects or uses personal information from users will need a Privacy Policy.'
          },
        ]
      }
    },
    methods: {
      onSubmit() {
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 30%;
    text-align: justify;
  }
  h6 {
    padding-top: 10px;
  }
  label {
    margin-left: 50px;
  }
  input {
    width: 300px;
    margin-left: 2px;
    background-color: azure;
    border-radius: 12px;
  }
  button {
    margin-top: 5px;
    margin-left: 2px;
    border-radius: 20px;
    width: 120px;
    background-color: midnightblue;
    color: white;
  }
  textarea {
    margin-left: 2px;
    width: 300px;
    background-color: azure;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    .form-text {
      margin-left: 30%;;
      margin-top: -180px;
    }
    .form-area {
      margin-left: 10%;
      margin-top: 3%;
    }
    .btn {
      margin-left: 23%;
      }
    }
  @media screen and (min-width: 992px) {
    .form-text {
      margin: 0;
    }
    .form-area {
      margin: 10px;
      padding-right: 10%;
    }
    label {
      margin-right: 30px;
    }
    .btn {
      margin-left: 35%;
    }
  }
</style>