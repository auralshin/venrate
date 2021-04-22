<template>
  <div class='buttons-container'>
  <div class='button facebook'>
    <i class="fab fa-facebook-f fa-2x"></i>
  </div>
  <div class='button twitter'>
    <i class="fab fa-twitter fa-2x"></i>
  </div>
  <div class='button github'>
    <i class="fab fa-github fa-2x"></i>
  </div>
  <div class='button instagram'>
    <i class="fab fa-instagram fa-2x"></i>
  </div>
  <div class='button ethereum'>
    <i class="fab fa-ethereum fa-2x"></i>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>


@import url(https://fonts.googleapis.com/css?family=Open+Sans);

 .buttons-container {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	
	flex-wrap: wrap;
}
 .button {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
	margin-bottom: 1em;
}
 .button:hover {
	cursor: pointer;
	box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.1);
	color: white;
}
 .facebook:hover {
	background: #3b5998;
}
 .twitter:hover {
	background: #1da1f2;
}
 .instagram:hover {
	background: linear-gradient(135deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
}
 .github:hover {
	background: black;
}
 .ethereum:hover {
	background: #434343;
 }
 
</style>