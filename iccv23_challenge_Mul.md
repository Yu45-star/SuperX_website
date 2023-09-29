---
title: ‎ 
subtitle: ‎ 
layout: page
show_sidebar: false
hide_footer: true
menubar_toc: true
hero_height: is-medium
hero_image: /img/iccv/Mul.gif
---

# 🎉 Welcome to ICCV'23 Sensor Fusion SLAM Challenge! 🎉

In the sensor fusion track, we exclusively offer access to high-quality **sensor-fusion** datasets sourced from SubT-MRS. These datasets encompass various challenging conditions such as **"lighting changes, darkness, smoke, self-similar environments and more"**. For the other two tracks, see here: [Visual-Inertial SLAM Challenge](https://superodometry.com/iccv23_challenge_VI) and [Lidar-Inertial SLAM Challenge](https://superodometry.com/iccv23_challenge_LiI).

Seize this chance to demonstrate your skills and compete among the finest in the field!

Three separate awards will be given for each track.
Your SLAM performance in <b>the Sensor Fusion track will not impact</b> the scores in other tracks.
Join us now to become a vital part of cutting-edge advancements in robotics and sensor fusion! 🤖💡 Let your expertise shine in this thrilling competition!

<span style="font-size:1.3em;"><font color="red"> <b> Important Latest Updates:</b> </font></span>
<br>
<br>
Hello everyone!
<br>
<br>
Thanks for participating the SLAM challenge!
<br>
<br>
As the competition deadline approaches, many teams asked for an extension. To ensure fairness, we've extended **the deadline to 11:59 PM EDT, October 15th, 2023**. It is important to note that each team **must provide answers to all questions in the report template**. A high-quality report will also be **factored into your final score** and assessed as a reference for the submitted trajectory.
<br>
<br>
Starting from September 25th, each team is limited to a maximum of 30 submissions. Please be aware that exceeding this limit will result in the **30th submission being considered as the final one**.
<br>
<br>
Additionally, registering multiple accounts is strictly prohibited now. Feel free to let us know if you have more questions.
<br>
<br>
We wish you the best of luck in the challenge! ^^
<br>
<br>
<span style="font-size:1.3em;"><font color="red"> <b> Previous Updates:</b> </font></span>

1. To facilitate better algorithm debugging for everyone recently, we allow multiple daily submissions until 20 Sept. Starting from 21 Sept, only one submission per day is allowed.


<span style="font-size:1.3em;">If you have any question, please do not hesitate to post issues on this [github website](https://github.com/water-horse/ICCV2023_SLAM_Challenge.git). We would love to hear from your feedback! Every post will be responded with no spared effort within 36 hours.<span>

<font color="red"> <b> Please note challenge deadline updated: 15th October 2023 11:59 PM EDT. </b> </font> 
<br>
Time remaining:
<p1 id="demo"></p1>


File structure: 
```
rosbag
└── SubT_MRS_{trajectory names ...}_{robot types ...}.zip
    └── (zipped) raw_data_{...}yyyy-mm-dd-hh-mm-ss{...}.bag
folder
├── SubT_MRS_{trajectory names ...}_{robot types ...}.zip
│   ├── (zipped) cam_0
│   │   ├── {...}.png
│   │   └── timestamps.txt
│   ├── (zipped) imu
│   │   └── imu_data.csv
│   ├── (zipped) lidar
│   │   ├── {...}.las
│   │   └── timestamps.txt
│   └── (zipped) tf
│       └── tf_data.csv
└── SubT_MRS_{trajectory names ...}_{robot types ...}.zip
    ├── (zipped) cam_0
    │   ├── {...}.png
    │   └── timestamps.txt
    ├── (zipped) imu
    │   └── imu_data.csv
    ├── (zipped) tf
    │   └── tf_data.csv
    └── (zipped) thermal
        ├── {...}.png
        └── timestamps.txt
```
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## SubT-MRS Datasets

- <b> Multiple Modalities: </b>
Our dataset includes hardware time-synchronized data from 4 RGB cameras, 1 LiDAR, 1 IMU, and 1 thermal camera, providing diverse and precise sensor inputs.

- <b> Diverse Scenarios: </b>
    Collected from multiple locations, the dataset exhibits varying environmental setups, encompassing indoors, outdoors, mixed indoor-outdoor, underground, off-road, and buildings, among others.

- <b> Multi-Degraded: </b>
   By incorporating multiple sensor modalities and challenging conditions like fog, snow, smoke, and illumination changes, the dataset introduces various levels of sensor degradation.

- <b> Heterogeneous Kinematic Profiles:</b>
  The SubT-MRS Dataset uniquely features time-synchronized sensor data from diverse vehicles, including RC cars, legged robots, drones, and handheld devices, each operating within distinct speed ranges. 

<!-- ![GIF Figure 1](img/slam_challenge/abandonedfactory.gif) ![GIF Figure 2](img/slam_challenge/gascola.gif) \\
![GIF Figure 3](img/slam_challenge/hospital.gif) ![GIF Figure 4](img/slam_challenge/jananesealley.gif) -->

## Download

<span style="font-size:1.3em;">ROS bag format:&emsp;**[Google](https://drive.google.com/drive/folders/1bV5oCLrpVoc6xKcIduUcco47nG0jPH6i)** Baidu</span>  
<span style="font-size:1.3em;">Folder format:&ensp;&ensp;&ensp;&nbsp;&nbsp;**[Google](https://drive.google.com/drive/folders/1E4EFVY-Bnef7sSBprnfL5Z49HAc89dLr)** Baidu</span>

| Name | Source  | Location  | Robot |Sensor | Description | Trajectory Length(m) | Duration  |  Video | Calibration (Extrinsics) | Calibration (Intrinsics) |
|---|-----------|---------|-----------|-----------|------------|-----------|-------------|-----------|---------------|--------------|
|Multi_Floor|SubT-MRS|Hawkins|SP1|Lidar,RGB,IMU|Multi Floor|270|417|[link](https://youtu.be/QcHjVLlsyXE)| [Google](https://drive.google.com/file/d/1BV87D60W35UGzIaHjKD64c_J1G0U70jf/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/1uH4wFmLeQNrIGlsUsO--PQuyEIOSOGvR/view?usp=drive_link) Baidu |
|Long_Corridor|SubT-MRS|Hawkins|RC2|Lidar,RGB,IMU|Multi Floor|616.45|295|[link](https://youtu.be/prmBxGRGwNY)| [Google](https://drive.google.com/file/d/1bB3jfEJeTf_XoLUHKOaxCNF_MCkiQTol/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/10rv5dg5un7kUveTPS3XBx8IuIYGg9r2h/view?usp=drive_link) Baidu |
|BlockLiDAR|SubT-MRS|Mill19|SP1|Lidar,RGB,IMU|Block Lidar|307.55|677|[link](https://youtu.be/2r4Z1XKTJHs)| [Google](https://drive.google.com/file/d/1NscQVVsQc_CN-16O_VLpLQnmTWgBmf93/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/1zCqwibpnmJ6I9lv29OUEnjyK2SxN4TbV/view?usp=drive_link) Baidu |
|BlockVisual|SubT-MRS|Mill19|SP1|RGB,IMU,Thermal|Block Visual/Thermal|186.02|359|[link](https://youtu.be/_vl2ClHvxPE)| [Google](https://drive.google.com/file/d/136vuMpzb7OrO_6f8w2-p6g1xyXn09u--/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/1f8DjHgZHH9-fCVUq1Q7kra5Tr5OtNBe-/view?usp=drive_link) Baidu |
|SmokeRoom|SubT-MRS|Hawkins|RC7|RGB,Thermal,IMU|Visual Degraded|104.84|418|[link](https://youtu.be/Ti2eAbDRMNk)| [Google](https://drive.google.com/file/d/1HjWlRVQQvgrFGlgRxcczRt92Xy_P-5Ij/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/1Q0JiqiIgGZ-7DZKZDNJ68F7rpC2rrLtT/view?usp=drive_link) Baidu |
|OutdoorNight|SubT-MRS|Hawkins|SP1|RGB,Thermal,IMU|Visual Degraded|254.03|484|[link](https://youtu.be/p3Gmdem0LoU)|  [Google](https://drive.google.com/file/d/1Zkb4FybZBx2skEXxYnffL4jNneTmd8pQ/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/1hbIyPUJ24YSyX1vISjkMUeqX5K0rrSkU/view?usp=drive_link) Baidu |
|FlashLight|SubT-MRS|Hawkins|SP1|RGB,Thermal,IMU|Visual Degraded|147.75|279|[link](https://youtu.be/RybUmK27fyY)| [Google](https://drive.google.com/file/d/10YJQ3FMRw95F3_yhOsX2bbuMuvQbtnVV/view?usp=drive_link) Baidu | [Google](https://drive.google.com/file/d/13iTBn_po_GWxt3X8kNWVGZ2wwQ38Eou0/view?usp=drive_link) Baidu |



## Evaluation 
The submission will be ranked based on Absolute Trajectory Error (ATE) and Relative Pose Error (RPE). Specifically, The ATE and RPE of every trajectory in the sensor fusion track and its bonus track will be evaluated. The final score for a submitted trajectory will be assigned according to which interval the weighted sum of the ATE and RPE lies in.  


## Submit the results. 

### Prepare the trajectory
For each of the 6 trajectories of **sensor-fusion track**, you need to compute the **poses in IMU coordinate frame**, and save them in the text file with the name sequnce_name.txt. Put all 6 files into a zip file with the following structure: 

```
    Multi_Model_Sensor_Fusion.zip
    ├── SubT_MRS_Hawkins_Long_Corridor_RC.txt            # result file for the trajectory Long Corridor 
    ├── SubT_MRS_Hawkins_Multi_Floor_LegRobot.txt        # result file for the trajectory Multi Floor 
    ├── SubT_MRS_MILL19_Block_LiDAR.txt                  # result file for the trajectory Block LiDAR 
    ├── SubT_MRS_MILL19_Block_Visual.txt                 # result file for the trajectory Block Visual   
    ├── SubT_MRS_Flash_Light_LegRobot.txt                # result file for the trajectory Flash Light
    ├── SubT_MRS_Hawkins_Smoke_Handheld.txt              # result file for the smoke room 
    └── Subt_MRS_Outdoor_Night_LegRobot.txt              # result file for the outdoor night
  
```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

The text file should have the following format: 

```
# timestamp_s tx ty tz qx qy qz qw
1.403636580013555527e+09 0.0 0.0 0.0 0.0 0.0 0.0 0.0

```

<br>
<br>
<br>
<br>
<br>


It is a text file containing the translation and orientation of the IMU in a fixed coordinate frame. The estimated trajectory file should satisfy the following requirements.
- Each line in the text file contains a single pose.
- The number of lines/poses must be the same as the number of image frames in that trajectory. 
- The format of each line is 'timestamp_s tx ty tz qx qy qz qw'. 
- tx ty tz (3 floats) give the position of IMU sensor to the world origin in the world frame.
- qx qy qz qw (4 floats) give the orientation of IMU in the form of a unit quaternion with respect to the world frame. 
- The trajectory can have an arbitrary initial position and orientation. However, we are using the IMU frame to define the motion. That is to say, the x-axis is pointing to forward, the y-axis is pointing left, the z-axis is pointing up.

### Submit in Gradescope  

To submit the estimated trajectory into the submission system, you can follow the steps listed below:

1. Register a account in the [GradeScope](http://gradescope.com/) and log into the website.
2. Click the right-bottom `Add Course` button and enter the course-entry code: `G2YGGB`, Then you can find the `iccv-mul` courses in your GradeScope homepage.
3. Click the `iccv-mul` course and you will see the assignment named `Trajectory-result-submission` in the dashboard.
4. Click the assignment and upload your `Sensor_Fusion.zip` file. Also please remember to input the group name as the leaderboard name. Then click the upload button.
    - You should directly compress the estimated result files of the trajectories into a zip file, not the folder containing the result files.
5. After around 1 minutes, you will see the APE and RPE result of your trajectory in the leaderboard.


### Submit Report

Participants are requested to submit a report describing their methods along with the gradescope submission. A template for the same is provided here : <a href="Report/ICCV_Report_Template.zip" download> ICCV_Template_Report </a> . Please include your report pdf in the `Sensor_Fusion.zip` file.


## Challenge Rules 
1. Participants are welcome to form teams. A participant cannot be in multiple teams and a team must make submissions under a single account.  
2. Every day a team can submit for at most once on gradescope and the submission must be in a certain time window: 12:00 P.M. - 11:59 P.M. UTC. 
3. The size of every trajectory file submitted should be no more than 2 MB.  
4. Every team <b>must submit a report</b> along with the gradescope submissions.  
5. Organizers reserve the right to make changes to the rules and timeline.  
6. Violation of the rules or other unfair activities may result in disqualification.  

##  🎉Sensor-Fusion Leaderboard 🎉
<!-- As of Sept 25, 11 AM, EDT.

| ATE Rank | Team       | Mean(1/ATE)  |
|------|------------------|----------|
| 1    |zxr / Yang Qianwen| 2.4588  |
| 2    |   Jiahao Wang    | 0.4999  |

| RPE Rank | Team       | Mean(1/RPE)  |
|------|------------------|----------|
| 1    |zxr / Yang Qianwen| 12.4388 |
| 2    |   Jiahao Wang    | 3.4267  | -->
Leaderboard will be open when there is still enough time before the challenge ends.

<!-- Note: The ATE(RPE) rank is according to the mean of the reciprocal of each trajectory's ATE(RPE) score, weighted by the trajectory length. -->

## Contact us

If you have any question or see anything wrong, please do not hesitate to <b>post issues on this [github website](https://github.com/water-horse/ICCV2023_SLAM_Challenge.git)</b>. We would love to hear from your feedback! Every post will be responded with no spared effort within 36 hours.


<!-- Display the countdown timer in an element -->
<style>

p1 {
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
  margin-left: 350px;
}
</style>
<!-- <p1 id="demo"></p1> -->

<script>
// Set the date we're counting down to
// var countDownDate = new Date("Sept 25, 2023 15:37:25").getTime();
var countDownDate = Date.UTC(2023, 09, 16, 4, 0, 0);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
// var new=Date.UTC(date.getUTCMonth(),
// date.getUTCDate(), 
// date.getUTCFullYear(), 
// date.getUTCHours(),
// date.getUTCMinutes(), 
// date.getUTCSeconds());
// let utc= new Date(utcString);
//   var now = new (Date().getTime()).getTimezoneOffset();
// console.log(dt); // Gives Tue Mar 22 2016 09:30:00 GMT+0530 (IST)

//   var now=dt.setTime(dt.getTime()+dt.getTimezoneOffset());
// console.log(dt); // Gives Tue Mar 22 2016 04:00:00 GMT+0530 (IST)

// var offset = -300; //Timezone offset for EST in minutes.
// var estDate = new Date(dt.getTime() + offset*60*1000);
// console.log(estDate); //Gives Mon Mar 21 2016 23:00:00 GMT+0530 (IST)

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var days=distance;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>