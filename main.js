"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(e){console.log("%c%s%c%s","background:#000;color:#ccc;padding:4px 10px;font-weight:bold;border-radius:4px;color:#ccc;margin-right:10px;","{MK}","background:#caffca;color:#ccc;padding:4px 10px;border-radius:4px;color:#166212;font-weight:bold","Service Worker Registered!")},function(e){console.log("%c%s%c%s","background:#000;color:#ccc;padding:4px 10px;font-weight:bold;border-radius:4px;color:#ccc;margin-right:10px;","{MK}","background:#ffd1d1;color:#ccc;padding:4px 10px;border-radius:4px;color:#8b0000;font-weight:bold","Error Registering Service Worker!")})});var headerHt=$("#header").height(),footerHt=$("#footer").height();function navigateTo(e){var o=event.target;$("body").removeClass("show-menu"),$("#menu li").removeClass("active"),$(o).closest("li").addClass("active"),$("html,body").animate({scrollTop:$("#"+e).offset().top-headerHt},500)}function toggleMenu(e){e.preventDefault(),$("body").toggleClass("show-menu")}$(window).on("load",function(){$("section").css("min-height",$(window).height()-(headerHt+footerHt-2)),$("#menu li:first-child a").addClass("active"),$("html,body").animate({scrollTop:$("#about").offset().top-headerHt},500),$("#sendMessage").on("click",function(){message=$("#contactform").serialize(),$.ajax({url:"//formspree.io/murali.tananki@gmail.com",method:"POST",headers:{"Access-Control-Allow-Origin":"*"},data:{message:message},dataType:"json"})})}),$(window).on("scroll",function(){var e=$(this).scrollTop(),o=$(window).scrollTop()==$(document).height()-$(window).height(),a=$("#about").height(),t=$("#experience").height()+a-30,i=$("#academics").height()+t-30,c=$("#certifications").height()+i-30,s=$("#portfolio").height()+c-30,r=$("#contact").height()+s-30;e<=a?($("#menu li").removeClass("active"),$("[data-nav='about']").closest("li").addClass("active")):e>a&&e<=t?($("#menu li").removeClass("active"),$("[data-nav='experience']").closest("li").addClass("active")):e>t&&e<=i?($("#menu li").removeClass("active"),$("[data-nav='academics']").closest("li").addClass("active")):e>i&&e<=c?($("#menu li").removeClass("active"),$("[data-nav='certifications']").closest("li").addClass("active")):e>c&&e<=s&&!o?($("#menu li").removeClass("active"),$("[data-nav='portfolio']").closest("li").addClass("active")):(e>s&&e<=r||o)&&($("#menu li").removeClass("active"),$("[data-nav='contact']").closest("li").addClass("active"))}),document.onkeydown=function(e){return(!e.ctrlKey||67!==e.keyCode&&86!==e.keyCode&&85!==e.keyCode&&117!==e.keyCode&&73!==e.keyCode)&&"F12"!==e.key.toUpperCase()},$(document).keypress("u",function(e){return!e.ctrlKey});
