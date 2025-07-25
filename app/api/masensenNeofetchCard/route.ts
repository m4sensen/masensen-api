import { NextResponse } from "next/server";

export async function GET() {
  const birth = new Date("2004-01-01");
  const now = new Date();
  const age = now.getFullYear() - birth.getFullYear();

  const shellPrompt = "masensen@localhost:~$ ";

  const name = "Masensen";
  const uptime = `${age} years old | Coding since 2021`;
  const os = "Android, Arch, Ubuntu, Fedora";
  const kernel = "Linux";
  const shell = "bash";
  const wm = "GNOME, Sway";

  const langs = "JavaScript, TypeScript, Python, Rust, Dart";
  const markup = "HTML, CSS";
  const spoken = "French, English, Tamazight";

  const apiTools = "Postman";
  const designTools = "Inkscape";
  const netTools = "nmap";
  const pkgManagers = "cmp, npm, apt, dnf, pacman";
  const writing = "Obsidian, Onlyoffice";
  const devTools = "git, github, gitKraken";

  const frameworks = "React, Next.js, Flutter, TailwindCSS";
  const runtimes = "Node.js";

  const dbs = "MongoDB, Firestore";
  const hostings = "Firebase, Vercel";

  const devops = "Docker, Kubernetes";
  const ide = "VSCodium, VSCode, Nano, Vim";
  const browsers = "Zen Browser, Firefox, Chromium, Tor";

  const svg = `<?xml version='1.0' encoding='UTF-8'?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  font-family="ConsolasFallback,Consolas,monospace"
  width="1200px"
  height="530px"
  font-size="16px"
>
  <style>
    @font-face {
      src: local("Consolas"), local("Consolas Bold");
      font-family: "ConsolasFallback";
      font-display: swap;
      -webkit-size-adjust: 109%;
      size-adjust: 109%;
    }
    #rect {
      fill: #09090b;
      stroke: #00c950; /* Optional border color */
      stroke-width: 5px; /* Optional border thickness */ /* Optional rounded corners — will NOT work in CSS! See below */
    }
    #ascii {
      fill: #00c950;
    }
    #shellPromptStyle {
      fill: #00c950;
    }
    #separators {
      fill: #00c950;
    }
    .key {
      font-weight: bold;
      fill: #fb2c36;
    }
    .token {
      fill: #71717b;
    }
    .value {
      fill: #00a6f4;
    }
    text,
    tspan {
      white-space: pre;
    }
  </style>
  <rect width="1200px" height="530px" rx="15" id="rect" />
  <text x="15" y="30" id="ascii">
    <tspan x="15" y="30">,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</tspan>
    <tspan x="15" y="50">,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;:c:,,,,,,</tspan>
    <tspan x="15" y="70">,,,,,,;doc,,,,,,;;,,,,,,,,,,,colll:,;,,,</tspan>
    <tspan x="15" y="90">,,,,,,;dxxo;,,,,,,,;,;;;;;;;llodlll,;,;,</tspan>
    <tspan x="15" y="110">,,,,,;;cxkkoc'',,,;;;,;;;,:lldolcld,,,;;</tspan>
    <tspan x="15" y="130">,,,,,;;,dxkxoc;;;;:;;:::,cllddlcclo,,,,;</tspan>
    <tspan x="15" y="150">,,,,,,;;:oodool:c::llllllllool::ll;,,,,,</tspan>
    <tspan x="15" y="170">;,;,,,,,;odxdlocccllcldoolloooc;o:',,,,,</tspan>
    <tspan x="15" y="190">,;,,''..',,,';lccl::,',,,,,;:cll:'',,,,,</tspan>
    <tspan x="15" y="210">,,,,'..''......''..................,,,,,</tspan>
    <tspan x="15" y="230">,,,,,.........,ol,...........'',,'.,,;,,</tspan>
    <tspan x="15" y="250">,,,,,,.......,ooc;'........'::,'',,,,,,,</tspan>
    <tspan x="15" y="270">,,,,,,,coc:cxll:;oxo:''''',;:cl:,;,,,,,,</tspan>
    <tspan x="15" y="290">,;;;;;::lodxKKdo00xdollloooooc;,,,,',,,,</tspan>
    <tspan x="15" y="310">,,;;;;;:ccoxkxoldxxdoooodddolooc;',,',,,</tspan>
    <tspan x="15" y="330">;,;;;;:;;:lxodO0Okddoooddooooc:,,;,'',,,</tspan>
    <tspan x="15" y="350">,;;,;;;;;;,lxkdddolccccllclccc:;cc;'',,,</tspan>
    <tspan x="15" y="370">,,,;;,;,,,;lkOOkkxdoooloooooc:;clc,,'.',</tspan>
    <tspan x="15" y="390">,,;,,,,,,,coxkOOOOkkxxxdlc:::looc;;;,..'</tspan>
    <tspan x="15" y="410">,,,,,,,,,;dxdxkkOOOkxdoc:clddol;,;:,,.''</tspan>
    <tspan x="15" y="430">,,,,,;,,,;odxkkkkkxxdododddlc::clc;,,.',</tspan>
    <tspan x="15" y="450">,,,,,,,,,:doloxxkxxooolccc:cloooc:;,''',</tspan>
    <tspan x="15" y="470">,,,,,,,,,;xkkkOOkkkxxddddddooolll::;'.',</tspan>
    <tspan x="15" y="490">,,,,,,,,,,oxkkOOOOOkxxxxdddoloolc:;;,.',</tspan>
    <tspan x="15" y="510">,,,,,,,,,,lxdxkkkkkkkxddoooddoolcc:;,.';</tspan>
  </text>
<text x="420" y="30">
<tspan x="420" y="40" id="separators">${shellPrompt} ———————————————————————————————————————————————————————</tspan>
<tspan x="420" y="70" class="token">* </tspan><tspan class="key">Name</tspan><tspan class="token">:</tspan><tspan class="token"> ..................... </tspan><tspan class="value">${name}</tspan>
<tspan x="420" y="90" class="token">* </tspan><tspan class="key">Uptime</tspan><tspan class="token">:</tspan><tspan class="token"> ................... </tspan><tspan class="value">${uptime}</tspan>
<tspan x="420" y="110" class="token">* </tspan><tspan class="key">OS</tspan><tspan class="token">:</tspan><tspan class="token"> ....................... </tspan><tspan class="value">${os}</tspan>
<tspan x="420" y="130" class="token">* </tspan><tspan class="key">Kernel</tspan><tspan class="token">:</tspan><tspan class="token"> ................... </tspan><tspan class="value">${kernel}</tspan>
<tspan x="420" y="150" class="token">* </tspan><tspan class="key">Shell</tspan><tspan class="token">:</tspan><tspan class="token"> .................... </tspan><tspan class="value">${shell}</tspan>
<tspan x="420" y="170" class="token">* </tspan><tspan class="key">WM/DE</tspan><tspan class="token">:</tspan><tspan class="token"> .................... </tspan><tspan class="value">${wm}</tspan>
<tspan x="420" y="190" class="token">* </tspan><tspan class="key">Languages</tspan><tspan class="token">:</tspan><tspan class="token">................. </tspan><tspan class="value">${langs}</tspan>
<tspan x="420" y="210" class="token">* </tspan><tspan class="key">Markup</tspan><tspan class="token">:</tspan><tspan class="token"> ................... </tspan><tspan class="value">${markup}</tspan>
<tspan x="420" y="230" class="token">* </tspan><tspan class="key">Spoken</tspan><tspan class="token">:</tspan><tspan class="token"> ................... </tspan><tspan class="value">${spoken}</tspan>
<tspan x="420" y="250" class="token">* </tspan><tspan class="key">Frameworks</tspan><tspan class="token">:</tspan><tspan class="token"> ............... </tspan><tspan class="value">${frameworks}</tspan>
<tspan x="420" y="270" class="token">* </tspan><tspan class="key">Runtimes</tspan><tspan class="token">:</tspan><tspan class="token"> ................. </tspan><tspan class="value">${runtimes}</tspan>
<tspan x="420" y="290" class="token">* </tspan><tspan class="key">Databases</tspan><tspan class="token">:</tspan><tspan class="token"> ................ </tspan><tspan class="value">${dbs}</tspan>
<tspan x="420" y="310" class="token">* </tspan><tspan class="key">Hosting</tspan><tspan class="token">:</tspan><tspan class="token"> .................. </tspan><tspan class="value">${hostings}</tspan>
<tspan x="420" y="330" class="token">* </tspan><tspan class="key">DevOps</tspan><tspan class="token">:</tspan><tspan class="token"> ................... </tspan><tspan class="value">${devops}</tspan>
<tspan x="420" y="350" class="token">* </tspan><tspan class="key">IDE</tspan><tspan class="token">:</tspan><tspan class="token"> ...................... </tspan><tspan class="value">${ide}</tspan>
<tspan x="420" y="370" class="token">* </tspan><tspan class="key">Browser</tspan><tspan class="token">:</tspan><tspan class="token"> .................. </tspan><tspan class="value">${browsers}</tspan>
<tspan x="420" y="390" class="token">* </tspan><tspan class="key">API Tools</tspan><tspan class="token">:</tspan><tspan class="token"> ................ </tspan><tspan class="value">${apiTools}</tspan>
<tspan x="420" y="410" class="token">* </tspan><tspan class="key">Design Tools</tspan><tspan class="token">:</tspan><tspan class="token"> ............. </tspan><tspan class="value">${designTools}</tspan>
<tspan x="420" y="430" class="token">* </tspan><tspan class="key">Network Tools</tspan><tspan class="token">:</tspan><tspan class="token"> ............ </tspan><tspan class="value">${netTools}</tspan>
<tspan x="420" y="450" class="token">* </tspan><tspan class="key">DevTools</tspan><tspan class="token">:</tspan><tspan class="token"> ................. </tspan><tspan class="value">${devTools}</tspan>
<tspan x="420" y="470" class="token">* </tspan><tspan class="key">Package managers</tspan><tspan class="token">:</tspan><tspan class="token"> ......... </tspan><tspan class="value">${pkgManagers}</tspan>
<tspan x="420" y="490" class="token">* </tspan><tspan class="key">Productivity / Writing</tspan><tspan class="token">:</tspan><tspan class="token"> ... </tspan><tspan class="value">${writing}</tspan>
<tspan x="420" y="510" id="separators">—————————————————————————————————————————————————————————————————————————————</tspan>
</text>
</svg>`;

  return new NextResponse(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
