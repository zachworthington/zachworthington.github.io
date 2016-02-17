// Copyright (c) 2014 All Right Reserved, http://www.videologygroup.com/
// @author Sreenivas Buddha
// last updated on July 15, 2015.

var vg_sbs_mini = vg_sbs_mini || {};
vg_sbs_mini.mdata = {};
vg_sbs_mini.receiveDataFromMini = function(id, status, status2){
    //console.log("Mini interacted : "+id + " :: "+status);
    if(id == "1") {vg_sbs_mini.mdata.m1 = status; vg_sbs_mini.mdata.m1a = status2;};
    if(id == "2") {vg_sbs_mini.mdata.m2 = status; vg_sbs_mini.mdata.m2a = status2;};
    if(id == "3") {vg_sbs_mini.mdata.m3 = status; vg_sbs_mini.mdata.m3a = status2;};
    if(id == "4") {vg_sbs_mini.mdata.m4 = status; vg_sbs_mini.mdata.m4a = status2;};
    if(id == "5") {vg_sbs_mini.mdata.m5 = status; vg_sbs_mini.mdata.m5a = status2;};
};
vg_sbs_mini.sendDataToMaster = function(){
    vg_sbs_mini.mdata.isactive = window.document.hasFocus();
    //console.log("Sending data to master..."+window.document.hasFocus());
    return vg_sbs_mini.mdata;
};