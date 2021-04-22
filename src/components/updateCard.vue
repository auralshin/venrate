<template>
  <div class="main">
      <form class="form">
      <div class="form__field">
          
     
              <div class="columns h">
                  <div class="profile-image column" >
                    <template v-if="preview">
                        <img :src="preview" class="neumorphic-card-photo"/>
                        
                    </template>
                  </div>
                  
                      <div class="input-group column">
                      <input class="input-group__input" type="file" accept="image/*" @change="previewImage" required>
                      <template v-if="preview">
                          <p class="mb-0 ml-4 mt-4">file name: {{ image.name }}</p>
              <p class="mb-0 ml-4 ">size: {{ image.size/1024 }}KB</p>
                      </template>
                                    </div>
                  
              </div>
              
        <div class="input-group">
          <label class="input-group__label">Name</label>
              <input class="input-group__input" type="text" required>
          </div>
          <div class="input-group">
      <label class="input-group__label">Occupation</label>
                  <input class="input-group__input" type="text" required>
              </div>
              <div class="input-group">
      <label class="input-group__label">Gender</label>
                  <input class="input-group__input" type="text" required>
              </div>
              <div class="input-group">
                  <label class="input-group__label">D-O-B</label>
        <b-datepicker
            placeholder="Click to select..."
            v-model="dates">
                </b-datepicker>
              </div>
              <div class="input-group">
      <label class="input-group__label">Bio</label>
                  <textarea class="input-group__input" rows="3" type="text" required /> 
              </div>
          </div>
      <div class="btn">
          <router-link :to="{ path: 'profile' }"><button class="button" type="button">Submit</button></router-link>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            preview: null,
        image: null,
        }
        
    },
    methods: {
        previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    }
}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.main {
    display: flex;
	justify-content: center;
	align-items: center;
    padding-top: 5vh;
  
}
.h {
    padding-top: 3vh;
}
.mb-0 {
    color: #303030;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
  display: block;
 
	width: 60vh;
	height: auto;
	padding: 0px 32px 25px 32px;
	background-color: #EBECF0;
	border-radius: 13px;
  box-shadow:  3px 3px 5px #BABECC,  -5px -5px 10px #FFF;
}
.form__field {
		display: grid;
		gap: 24px;
		margin-bottom: 32px;
	
}

.input-group__label {
    display: block;
    padding-left: 10px;
		font-size: 20px;
		letter-spacing: 0.05em;
    color: #303030;
    font-weight: bold;
    text-shadow: 2px 2px 0 rgb(215, 245, 250);
    margin-bottom: 8px;
	}
.input-group__input {
		display: block;    
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
		width: 100%;
		background-color: transparent;
		font-size: 18px;
		letter-spacing: 0.1em;
    color: #61677C;
    text-shadow: 1px 1px 0 #FFF;
		padding: 12px;
		outline: none;
		border: none;
		border-radius: 30px;
    box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
    transition: all 0.2s ease-in-out;    
	}
.input-group__input:focus {
      box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }
    .input-group__input:hover {
      box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }

.input-group {
	width: 100%;
	height: auto;
}

.button {
	background-color: transparent;
	color: #2b2a2a;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 0.07em;
	text-shadow: 1px 1px 0 #FFF;
	padding: 16px 85px;
	border: 0;
	border-radius: 30px;
	box-shadow:  3px 3px 5px #BABECC,  -4px -4px 10px #FFF;
	outline: 0;
	cursor: pointer;
	transition: all 0.3s ease-in-out;	
}
.button:hover {
		box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
        background:  linear-gradient(315deg, #6ce7e7 0%, #e657e1 74%);
        color: white;
	}

.button:active {
		box-shadow: inset 2px 2px 3px #BABECC, inset -2px -2px 3px #FFF;
	}


</style>