function getInternetExplorerVersion(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)&&(e=parseFloat(RegExp.$1)),e<8&&(e=8,$("html").addClass("ie_old")),$("html").addClass("ie"+e)}}document.createElement("article"),document.createElement("section"),document.createElement("aside"),document.createElement("nav"),document.createElement("header"),document.createElement("footer"),document.createElement("main"),getInternetExplorerVersion(),$(function(){if(console.log(),0<$("nav").length&&1400<$("body").outerHeight()){var e=$("nav").offset().top;$(window).scroll(function(){e<=$(document).scrollTop()?$("nav").addClass("fix"):$("nav").removeClass("fix")})}});