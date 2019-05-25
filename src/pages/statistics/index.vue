<template>
	<div class="statistics">
		<div class="statistics-item">
			<div class="info">
				<img src="../../assets/device.png" alt="设备总数">
				<div>
					<p>设备总数<span>5</span><Icon type="ios-alert-outline" /></p>
					<div>66</div>
				</div>
			</div>
			<p>设备总数66</p>
		</div>
		<div class="statistics-item">
			<div class="info">
				<img src="../../assets/user.png" alt="用户总数">
				<div>
					<p>用户总数<span>5</span><Icon type="ios-alert-outline" /></p>
					<div>66</div>
				</div>
			</div>
			<p>设备总数66</p>
		</div>
		<div class="statistics-item">
			<div class="info">
				<img src="../../assets/electrol.png" alt="电池电量">
				<div>
					<p>电池电量<span>5</span><Icon type="ios-alert-outline" /></p>
					<div>66</div>
				</div>
			</div>
			<p>设备总数66</p>
		</div>
		<div class="statistics-item">
			<div class="info">
				<img src="../../assets/faultDevice.png" alt="故障设备">
				<div>
					<p>故障设备<span>5</span><Icon type="ios-alert-outline" /></p>
					<div>66</div>
				</div>
			</div>
			<p>设备总数66</p>
		</div>
	</div>
</template>
<script>
export default{
	name:"statistics"
}
</script>
<style scoped>
.statistics{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
}
.statistics-item{
  display:flex;
  flex-direction:colum;
  width:100%;
}
.info{
	display:flex;
	flex-direction:row;
	border-bottom: 1px solide #ccc;
}
</style>