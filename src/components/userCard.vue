<template>
  <div class="card-container">
    <div class="neumorphic-card">
      <div class="profile-container">
        <div>
          <div class="profile-image">
            <img src="http://placedog.net/75/75" class="neumorphic-card-photo"/>
          </div>
          <div class="profile-meta">
            <span class="profile-name">Doggo</span>
            <span class="profile-title">Frontend Engineer</span>
            <br/>

            <span class="profile-gender">Male</span>
            <br/>

            <span class="profile-dob">13-Nov-2000</span>
            <br/>
            <span class="profile-bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, porro?</span>

          </div>
        </div>
        <div class="profile-buttons">
          <router-link :to="{ path: 'edit' }"><button class="neumorphic-button">Edit</button></router-link>
          <button class="neumorphic-button">Share</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top:100px ;
}

.neumorphic-card {
  height: 50vh;
  width: 60vh;
  border-radius: 10px;
  text-align: center;
  transition: transform linear 0.2s;
  background: rgb(179, 241, 236);
  box-shadow: 
    12px 12px 16px 0 rgba(255, 255, 255, 0.3),
    -8px -8px 12px 0 rgba(0, 0, 0, .25);
}
  .neumorphic-card:hover {
    transform: scale(1.1, 1.1)
  }
  
  .profile-container {
    display: flex; 
    flex-direction: column;
    align-items: center;
    
  }
    .neumorphic-card-photo {
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      box-shadow: 6px 6px 8px 0 rgba(255, 255, 255, 0.3),
        -4px -4px 6px 0 rgba(0, 0, 0, .25); 
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      height: 105px;
      width: 105px;
    }
    
    .profile-meta {
        display: flex;
        flex-direction: column;
        
      }
      
      .profile-name {
        margin-top: 1.5em;
        color: #474747;
        font-weight: bold;
        font-size: larger;
      }
      
      .profile-title {
        color: #474747;
        font-size: large;
        font-weight: bold;
      }
    .profile-dob {
        color: #474747;
        font-size: large;
        font-weight: bold;
      }.profile-gender {
        color: #474747;
        font-size: large;
        font-weight: bold;
      }.profile-bio {
        color: #474747;
        font-size: large;
        font-weight: bold;
      }
    
    .profile-buttons {
      margin-top: 1.5em;
    }
      .neumorphic-button {
        border-radius: 40px;
        border: none;
        height: 40px;
        width: 100px;
        margin: 5px;
        cursor: pointer;
        color: #000000;
        font-weight: bolder;
        background-color: #fff;
        transition: box-shadow ease-in-out 0.2s;
        box-shadow: 6px 6px 8px 0 rgba(255, 255, 255, 0.3),
                  -4px -4px 6px 0 rgba(0, 0, 0, .25); 
        outline: none;
      }
        .neumorphic-button:active {
                  transition: box-shadow ease-in-out 0.2s;
          box-shadow: 3px 3px 4px 0 rgba(255, 255, 255, 0.3) inset,
                  -2px -2px 3px 0 rgba(0, 0, 0, .25) inset; 
          color: #595858;
        }
      
      
    
  


</style>