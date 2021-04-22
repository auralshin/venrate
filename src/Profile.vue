<template>
    <!-- <div class="center">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="https://images.unsplash.com/19/desktop.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img src="https://bulma.io/images/placeholders/96x96.png" class="is-rounded " alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-2">John Smith</p>
                <p class="subtitle is-4">@johnsmith</p>
              </div>
            </div>
         
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. 
              
              <br>
            </div>
            <div class="content">
              Date of Birth :  <time datetime="2016-1-1"> 1 Jan 2016</time>
            </div>
            <div class="content">
                Origin Country : {{ country }}
            </div>

            

           <div class="columns">
                 <b-button size="is-medium"
                icon-left="github-circle">
                Add
            </b-button>
                <div class="button column is-info is-medium"> Edit </div>
                <div class="button column is-info is-medium"> Edit </div>
            </div> 
            <div class="container">
               
            </div>
            <div class="button is-info is-medium"> Edit </div>
          </div>
        </div>
    </div> -->
    <userCard />
</template>

<script>
import userCard from './components/userCard'
export default {
    components: {
        userCard,
    },
    data() {
        return {
        country : 'India'
    }
}
}
</script>
<style>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
}


</style>