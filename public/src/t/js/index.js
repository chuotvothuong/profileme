//////////////////////////////////////////////////////////////
// START RESOURCE V3
$(function(){
    CheckFps();
    Alerts();
    MusicPlay();
    ShowToast();
    console.log("%c🌳 Name：Jerry | Bio：Sayy Hello | Url：https://www.thanhdieu.com 🌳", "font-family: ;color:#fff; background: linear-gradient(270deg, #18d7d3, #68b7dd, #8695e6, #986fee); padding: 8px 15px; border-radius: 8px");
    console.log("…………./´¯/)……….. (\\¯’\\\n…………/….//……….. …\\\\….\\\n………../….//………… ….\\\\….\\\n…../´¯/…./´¯\\\\………../¯‘\\\\…./¯’\\\\\n.././…/…./…./.|_|……_| .\\\\…\\\\…\\\\…\\\\.\\\\\n(.(….(….(…./.)..)..(..(. \\\\….)….)….).)\n.\\\\…………….\\/…/…\\\\. ..\\/……………./\n..\\\\…………….. /……..\\\\………………../\n…\\\\…………..(………. ..)……………./");
});
// CHECK FPS
var fps=document.getElementById("fps");
var startTime=Date.now();
var frame=0;
function CheckFps() {
  var time=Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML=(frame / ((time - startTime) / 1000)).toFixed(1);
    startTime=time;
    frame=0;
  }
  window.requestAnimationFrame(CheckFps);
}
// TIEU SU CHỮ CHẠY
let typed=new Typed(".GioiThieu", {
  strings: ["","Xin Chào Các Bạn, Tôi Là Chuột.", "Dưới Đây Là Tát Cả Các Mxh Của Chuột 2️⃣0️⃣1️⃣0️⃣ "],
  typeSpeed: 95,
  backSpeed: 75,
  loop: true
})
// MUSIC PLAY
const MusicList=[
    "//thanhdieu.com/files/Em-Nào-Có-Tội.mp3",
    "//thanhdieu.com/files/Anh-Đã-Quen-Với-Cô-Đơn.mp3",
    "//thanhdieu.com/files/Về-Bên-Anh.mp3",
	"//https://files.catbox.moe/99i8nm.mp3",
];
let t=parseInt(localStorage.getItem('td')) || Math.floor(Math.random() * MusicList.length);
const audio=new Audio(MusicList[t]);
function MusicPlay() {audio.play();}
document.addEventListener('click', MusicPlay);
audio.addEventListener("ended", function() {
t=(t + 1) % MusicList.length;
localStorage.setItem('td', t);
audio.src=MusicList[t];
audio.play();
});
// LOADER SCREEN ----------
let spin=document.querySelector('.LoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('HideLoader');
  setTimeout(() => {
    spin.remove();
  }, 5000);
});
function ShowToast() {
	var x=document.getElementById("Toast");
	x.className="show";
	setTimeout(function(){ x.className=x.className.replace("show", ""); }, 3000);
}
$(document).ready(function() {
    function OpenUrl(url) {
      setTimeout(function() {
        window.open(url, '_blank');
      }, 100);
    }
    $('#Facebook').click(function() {
        OpenUrl('https://www.facebook.com/chuotxyzabc');
    });
    $('#TikTok').click(function() {
        OpenUrl('https://www.tiktok.com/@chuotarm2010');
    });
    $('#Discord').click(function() {
        OpenUrl('https://');
    });
    $('#Instagram').click(function() {
        OpenUrl('https://');
    });
});
function Alerts() {
  Swal.fire({
    title: '𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 !',
    text: '=>> 𝘾𝙝𝙖𝙤 𝙈𝙪𝙣𝙜 𝘿𝙚𝙣 𝙑𝙤𝙞 𝙏𝙧𝙖𝙣𝙜 𝙒𝙚𝙙 𝘾𝙪𝙖 𝘾𝙝𝙪𝙤𝙩 💘 <<=',
    showConfirmButton: false
  });
}
// Skill Language
$('.skill-per').each(function() {
    var $this=$(this);
    var per=$this.attr('per');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
      duration: 12000,
      step: function() {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function() {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    function __GetIP() {
        fetch("https://ipapi.co/json/?v=" + Math.random())
            .then(res => res.json())
            .then(data => {
                document.getElementById("geoip").innerText =
                    `${data.ip} ${data.org || data.asn || ''}`;
            })
            .catch(err => console.error("IP API error:", err));
    }

    function __GetInfo() {
        fetch("https://ipapi.co/json/?v=" + Math.random())
            .then(res => res.json())
            .then(data => {
                document.getElementById("geoinfo").innerText =
                    `${data.region} ${data.country_name}`;
            })
            .catch(err => console.error("Info API error:", err));
    }

    __GetIP();
    __GetInfo();

});
