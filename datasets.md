---
title: SLAM Datasets
subtitle: Multi-Robot, Multi-Degraded SLAM Datasets
layout: page
show_sidebar: false
hide_footer: false
hero_height: is-large
hero_image: /img/datasets/dataset_video_short.gif
hero_link: /datasets#download
hero_link_text: Download
---

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.js"
    integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA=" crossorigin="anonymous"></script>
<script src="/datasets/jquery.csv.min.js"></script>
<style> html { scroll-behavior: smooth; }

td th {
text-align: center !important;
vertical-align: middle !important;
}

.tooltip {
position: relative;
display: inline-block;
}

.tooltip .tooltiptext {
opacity: 0%;
width: 120px;
background-color: black;
color: #fff;
text-align: center;
border-radius: 6px;
padding: 5px 0;

position: absolute;
z-index: 1;
top: 100%;
left: 50%;
margin-left: -60px;
}

.tooltip:hover .tooltiptext {
opacity: 40%;
}
</style>

# About

![]()
<img src="/img/datasets/palette.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;" />

We present the first real-world datasets collected in Subterranean Environments includes caves, urban, and tunnels that specifically push the limits of robust SLAM. These datasets are the first Multi-Robot Datasets that include UGV, UAV, and Spot with various motions. These datasets are the first Multi-Spectral dataset that includes Visual, Lidar, Thermal, and inertial measurements in various challenging environments such as darkness, smoke, dust, and geometrically degraded environments such as a long corridor.

# Sensors

<iframe width="100%" height="400" style="display: block; margin-left: auto; margin-right: auto; width: 50%;"  src="https://www.youtube.com/embed/G8KaflyapIE" title="Website - Sensor Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<img src="/img/datasets/specs.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;" />

# Contribute

How to contribute to this dataset?

1. Have your dataset ready.
2. Use <a href="/rosbagutils" style="color:#cc002b;">Rosbag Utils</a> to filter the topics you want to publish.
3. Rosbag Utils can also provide some statistics for your robot trajectory.
4. Contact Haoxiang Sun (<haoxians@andrew.cmu.edu>) for more information.

# Download

<div id="chips" class="chips" onclick="openAutoComplete()">
<input class="custom-class">
</div>
<button style="" class="btn waves-effect waves-light" onclick="onFilterButton()">Filter<i class="material-icons right">filter_list</i></button>
<span id="numResultLabel" style="padding-left: 20px;"></span>
<table class="">
<thead>
    <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Robot</th>
        <th>Sensors</th>
        <th>Description</th>
        <th>Degraded types</th>
        <th>Length</th>
        <th>Return to origin</th>
        <th>Size</th>
        <th>Picture</th>
    </tr>
</thead>

<tbody id="datasetTable"></tbody>
</table>
<br>

# Organizers

<hr>
 <table class="customFormat" style="width:100%border-collapse: collapse; border: none;">
  <tr>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/team/shibozNew.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://theairlab.org/team/shiboz/">Shibo Zhao</a>
      </p>
      <p style="margin-bottom: 3px;">PhD Candidate </p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/team/lucas_nogueira_crop.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://theairlab.org/team/lucas_nogueira/">Lucas Nogueira</a>
      </p>
      <p style="margin-bottom: 3px;">Master's Student</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/team/ian.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://theairlab.org/team/ian/">Ian Higgins</a>
      </p>
      <p style="margin-bottom: 3px;">Research Associate</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/team/haoxiangsun.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://seansun.org">Haoxiang Sun</a>
      </p>
      <p style="margin-bottom: 3px;">Undergradate Student</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/team/rushan_jiang.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://drive.google.com/file/d/1qWiMQoJsAF4oOikU0akjOOveBn-SUOLl/view">Rushan Jiang</a>
      </p>
      <p style="margin-bottom: 3px;">Undergradate Student</p>
      <p>Carnegie Mellon University</p>
    </td> <td style="text-align: center;">
      <img class="circular_image" src="/img/team/chuck-whittaker.jpg" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://www.ri.cmu.edu/ri-people/warren-whittaker/">Warren Whittaker</a>
      </p>
      <p style="margin-bottom: 3px;">Senior Field Robotics Specialist</p>
      <p>Carnegie Mellon University</p>
    </td>
    <td style="text-align: center;">
      <img class="circular_image" src="/img/iccv_organizers/iccv_members/daman.png" style="margin-bottom: 6px;"/>
      <p style="margin-bottom: 3px;">
        <a style="margin-bottom: 1px;" href="https://www.linkedin.com/in/damanpreet-singh-289a46163/">Damanpreet Singh</a>
      </p>
      <p style="margin-bottom: 3px;">Graduate Student</p>
      <p>Carnegie Mellon University</p>
      </tr>
     <tr>
    </td> 
  </tr>
</table>

<script>
let calibrations;
let datasetsStr, datasets;
let datasetTable;
let chipsInput;
let options = {
    placeholder: "Filter datasets...",
    secondaryPlaceholder: "+Tag",
    autocompleteOptions: {
        data: {
            Lidar: null,
            IMU: null,
            Thermal: null,
            Subt: null,
            UAV: null,
            UGV: null,
        },
        limit: Infinity,
        minLength: 0,
    },
};

document.addEventListener("DOMContentLoaded", function () {
    let elems = document.querySelectorAll(".chips");
    M.Chips.init(elems, options);
    chipsInput = M.Chips.getInstance(elems[0]);
});

datasetTable = document.getElementById("datasetTable");
loadCalibrationCsv(() => { loadDatasetCsv(); });

function openAutoComplete() {
    setTimeout(function () {
        if (!chipsInput.autocomplete.isOpen) {
            console.log("openAutoComplete");
            chipsInput.autocomplete.open();
        }
    }, 200);
}

function onFilterButton() {
    let startTime = new Date().getTime();
    let filter = chipsInput.chipsData.map((chip) => chip.tag.toLowerCase());
    filterTable(filter);
    console.log("Filter time used: " + (new Date().getTime() - startTime) + "ms");
}

function loadCalibrationCsv(callback) {
    makeRequest("/datasets/calibrations.csv", "", (str) => {
        let rows = $.csv.toArrays(str);
        calibrations = {};
        for (let i = 0; i < rows.length; i++) {
           calibrations[rows[i][0]] = rows[i][1];
        }
        if (callback) callback();
    });
}

function loadDatasetCsv(callback) {
    makeRequest("/datasets/datasets.csv", "", (str) => {
        datasetsStr = str.split("\n");
        for (let i = 0; i < datasetsStr.length; i++) {
            datasetsStr[i] = datasetsStr[i].toLowerCase();
        }
        let rows = $.csv.toArrays(str);
        datasets = [];
        for (let i = 0; i < rows.length; i++) {
            let dataset = {};
            dataset.id = rows[i][0].trim();
            dataset.name = rows[i][1].trim();
            dataset.location = rows[i][2].trim();
            dataset.description = rows[i][3].trim();
            dataset.robot = rows[i][4].trim();
            dataset.sensors = rows[i][5].trim();
            dataset.degraded = rows[i][6].trim();
            dataset.trajectoryLength = rows[i][7].trim();
            dataset.duration = rows[i][8].trim();
            dataset.returnToOrigin = rows[i][9].trim();
            dataset.size = rows[i][10].trim();
            dataset.image =
                rows[i][11].trim() !== "" ? rows[i][11].trim() : `/datasets/img/${dataset.id}.png`;
            dataset.link = rows[i][12].trim();
            datasets.push(dataset);
        }

        datasetTable.innerHTML = "";
        for (let i = 1; i < datasets.length; i++) {
            let row = datasets[i];
            generateRow(datasetTable, i, [
                makeDownloadLink(row.name, row.link),
                row.location,
                makeRobotIDs(row.robot),
                row.sensors,
                row.description,
                row.degraded,
                makeLengthDuration(row.trajectoryLength, row.duration),
                row.returnToOrigin,
                row.size,
                makePicture(i),
            ]);
        }
        filterTable();
        if (callback) callback();
    });
}

function filterTable(filters) {
    if (filters === undefined) filters = [];
    let count = 0;
    for (let i = 1; i < datasets.length; i++) {
        let isIncluded = true;
        for (let j = 0; j < filters.length; j++) {
            if (datasetsStr[i].indexOf(filters[j]) < 0) {
                isIncluded = false;
                break;
            }
        }
        if (isIncluded) {
            document.getElementById(`row-${i}`).style.display = "";
            count++;
        } else {
            document.getElementById(`row-${i}`).style.display = "none";
        }
    }
    document.getElementById("numResultLabel").innerHTML = `(Showing ${count} datasets)`;
}

function generateRow(table, rowIdx, dataArr) {
    let row = document.createElement("tr");
    row.id = "row-" + rowIdx;
    for (let i = 0; i < dataArr.length; i++) {
        let cell = document.createElement("td");
        if (typeof dataArr[i] === "string") {
            cell.innerHTML = dataArr[i];
        } else {
            cell.appendChild(dataArr[i]);
        }
        row.appendChild(cell);
    }
    return table.appendChild(row);
}

function makeLengthDuration(length, duration) {
    return `${length} <br> (${duration})`;
}

function makePicture(idx) {
    let img = document.createElement("img");
    img.id = `picture-${idx}`;
    img.idx = idx;
    img.src = datasets[idx].image;
    img.alt = "Loading...";
    img.style.width = "178px";
    img.style.height = "100px";
    img.style.objectFit = "scale-down";
    return img;
}

function makeRobotIDs(allIds) {
    let ids = allIds.split(",");
    let result = "";
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i].trim();
        if (id === "") continue;
        result += makeCalibrationLink(id);
        if (i < ids.length - 1) result += ", ";
    }
    return result;
}

function makeCalibrationLink(name) {
    if (calibrations[name] === undefined) alert("Calibration not found: " + name);
    let link = calibrations[name];
    if (link.indexOf("https://") < 0 && link.indexOf("http://") < 0) link = "https://" + link;
    let result = `<a class="tooltip" onclick="window.open('${link}','_blank')">${name}`;
    result += `<span class="tooltiptext">Download ${name} calibration</span>`;
    result += `</a>`;
    return result;
}

function makeDownloadLink(name, link) {
    if (link.indexOf("https://") < 0 && link.indexOf("http://") < 0) link = "https://" + link;
    let result = `<a class="tooltip" onclick="window.open('${link}','_blank')">${name}`;
    result += `<span class="tooltiptext">Download dataset</span>`;
    result += `</a>`;
    return result;
}

function makeDownloadButton(link) {
    if (link.indexOf("https://") < 0 && link.indexOf("http://") < 0) link = "https://" + link;
    return `<a class="waves-effect waves-light btn-small" onclick="window.open('${link}','_blank')">Download</a>`;
}

function makeRequest(url, data, callback) {
    let httpRequest = new XMLHttpRequest();
    if (!httpRequest) return false;

    function receivedResponse() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log("RECEIVED RESPONSE: " + httpRequest.responseText);
                callback(httpRequest.responseText);
            } else {
                console.log("ERROR: Request failed");
                alert("Unable to load datasets.");
            }
        }
    }

    httpRequest.timeout = 0;
    httpRequest.onreadystatechange = receivedResponse;
    console.log("SENDING REQUEST: " + url);
    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.send(data);
}
</script>
