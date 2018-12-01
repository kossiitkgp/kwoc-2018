$(function() {
    var langColor = {
    "Mercury": "#ff2b2b",
    "TypeScript": "#2b7489",
    "PureBasic": "#5a6986",
    "Objective-C++": "#6866fb",
    "Self": "#0579aa",
    "edn": "#db5855",
    "NewLisp": "#87AED7",
    "Jupyter Notebook": "#DA5B0B",
    "Rebol": "#358a5b",
    "Frege": "#00cafe",
    "Dart": "#00B4AB",
    "AspectJ": "#a957b0",
    "Shell": "#89e051",
    "Web Ontology Language": "#9cc9dd",
    "xBase": "#403a40",
    "Eiffel": "#946d57",
    "Nix": "#7e7eff",
    "RAML": "#77d9fb",
    "MTML": "#b7e1f4",
    "Racket": "#22228f",
    "Elixir": "#6e4a7e",
    "SAS": "#B34936",
    "Agda": "#315665",
    "wisp": "#7582D1",
    "D": "#ba595e",
    "Kotlin": "#F18E33",
    "Opal": "#f7ede0",
    "Crystal": "#776791",
    "Objective-C": "#438eff",
    "ColdFusion CFC": "#ed2cd6",
    "Oz": "#fab738",
    "Mirah": "#c7a938",
    "Objective-J": "#ff0c5a",
    "Gosu": "#82937f",
    "FreeMarker": "#0050b2",
    "Ruby": "#701516",
    "Component Pascal": "#b0ce4e",
    "Arc": "#aa2afe",
    "Brainfuck": "#2F2530",
    "Nit": "#009917",
    "APL": "#5A8164",
    "Go": "#375eab",
    "Visual Basic": "#945db7",
    "PHP": "#4F5D95",
    "Cirru": "#ccccff",
    "SQF": "#3F3F3F",
    "Glyph": "#e4cc98",
    "Java": "#b07219",
    "MAXScript": "#00a6a6",
    "Scala": "#DC322F",
    "Makefile": "#427819",
    "ColdFusion": "#ed2cd6",
    "Perl": "#0298c3",
    "Lua": "#000080",
    "Vue": "#2c3e50",
    "Verilog": "#b2b7f8",
    "Factor": "#636746",
    "Haxe": "#df7900",
    "Pure Data": "#91de79",
    "Forth": "#341708",
    "Red": "#ee0000",
    "Hy": "#7790B2",
    "Volt": "#1F1F1F",
    "LSL": "#3d9970",
    "eC": "#913960",
    "CoffeeScript": "#244776",
    "HTML": "#e44b23",
    "Lex": "#DBCA00",
    "API Blueprint": "#2ACCA8",
    "Swift": "#ffac45",
    "C": "#555555",
    "AutoHotkey": "#6594b9",
    "Isabelle": "#FEFE00",
    "Metal": "#8f14e9",
    "Clarion": "#db901e",
    "JSONiq": "#40d47e",
    "Boo": "#d4bec1",
    "AutoIt": "#1C3552",
    "Clojure": "#db5855",
    "Rust": "#dea584",
    "Prolog": "#74283c",
    "SourcePawn": "#5c7611",
    "AMPL": "#E6EFBB",
    "FORTRAN": "#4d41b1",
    "ANTLR": "#9DC3FF",
    "Harbour": "#0e60e3",
    "Tcl": "#e4cc98",
    "BlitzMax": "#cd6400",
    "PigLatin": "#fcd7de",
    "Lasso": "#999999",
    "ECL": "#8a1267",
    "VHDL": "#adb2cb",
    "Elm": "#60B5CC",
    "Propeller Spin": "#7fa2a7",
    "X10": "#4B6BEF",
    "IDL": "#a3522f",
    "ATS": "#1ac620",
    "Ada": "#02f88c",
    "Unity3D Asset": "#ab69a1",
    "Nu": "#c9df40",
    "LFE": "#004200",
    "SuperCollider": "#46390b",
    "Oxygene": "#cdd0e3",
    "ASP": "#6a40fd",
    "Assembly": "#6E4C13",
    "Gnuplot": "#f0a9f0",
    "JFlex": "#DBCA00",
    "NetLinx": "#0aa0ff",
    "Turing": "#45f715",
    "Vala": "#fbe5cd",
    "Processing": "#0096D8",
    "Arduino": "#bd79d1",
    "FLUX": "#88ccff",
    "NetLogo": "#ff6375",
    "C Sharp": "#178600",
    "CSS": "#563d7c",
    "Emacs Lisp": "#c065db",
    "Stan": "#b2011d",
    "SaltStack": "#646464",
    "QML": "#44a51c",
    "Pike": "#005390",
    "LOLCODE": "#cc9900",
    "ooc": "#b0b77e",
    "Handlebars": "#01a9d6",
    "J": "#9EEDFF",
    "Mask": "#f97732",
    "EmberScript": "#FFF4F3",
    "TeX": "#3D6117",
    "Nemerle": "#3d3c6e",
    "KRL": "#28431f",
    "Ren'Py": "#ff7f7f",
    "Unified Parallel C": "#4e3617",
    "Golo": "#88562A",
    "Fancy": "#7b9db4",
    "OCaml": "#3be133",
    "Shen": "#120F14",
    "Pascal": "#b0ce4e",
    "F#": "#b845fc",
    "Puppet": "#302B6D",
    "ActionScript": "#882B0F",
    "Diff": "#88dddd",
    "Ragel in Ruby Host": "#9d5200",
    "Fantom": "#dbded5",
    "Zephir": "#118f9e",
    "Click": "#E4E6F3",
    "Smalltalk": "#596706",
    "DM": "#447265",
    "Ioke": "#078193",
    "PogoScript": "#d80074",
    "LiveScript": "#499886",
    "JavaScript": "#f1e05a",
    "VimL": "#199f4b",
    "PureScript": "#1D222D",
    "ABAP": "#E8274B",
    "Matlab": "#bb92ac",
    "Slash": "#007eff",
    "R": "#198ce7",
    "Erlang": "#B83998",
    "Pan": "#cc0000",
    "LookML": "#652B81",
    "Eagle": "#814C05",
    "Scheme": "#1e4aec",
    "PLSQL": "#dad8d8",
    "Python": "#3572A5",
    "Max": "#c4a79c",
    "Common Lisp": "#3fb68b",
    "Latte": "#A8FF97",
    "XQuery": "#5232e7",
    "Omgrofl": "#cabbff",
    "XC": "#99DA07",
    "Nimrod": "#37775b",
    "SystemVerilog": "#DAE1C2",
    "Chapel": "#8dc63f",
    "Groovy": "#e69f56",
    "Dylan": "#6c616e",
    "E": "#ccce35",
    "Parrot": "#f3ca0a",
    "Grammatical Framework": "#79aa7a",
    "Game Maker Language": "#8fb200",
    "Papyrus": "#6600cc",
    "NetLinx+ERB": "#747faa",
    "Clean": "#3F85AF",
    "Alloy": "#64C800",
    "Squirrel": "#800000",
    "PAWN": "#dbb284",
    "UnrealScript": "#a54c4d",
    "Standard ML": "#dc566d",
    "Slim": "#ff8f77",
    "Perl6": "#0000fb",
    "Julia": "#a270ba",
    "Haskell": "#29b544",
    "NCL": "#28431f",
    "Io": "#a9188d",
    "Rouge": "#cc0088",
    "cpp": "#f34b7d",
    "AGS Script": "#B9D9FF",
    "Dogescript": "#cca760",
    "nesC": "#94B0C7"
    };

    var randcolors = ["#3498db", "#9b59b6", "#8e44ad", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"]

    var cards = [
      {'title': 'Add Cover Art', 'id': 1, 'btnid': 1001, 'intro': 'Change cover photo of all your songs automatically using python', 'intro_full': 'Change cover photo of all your songs automatically using python', 'mentor': 'Piyush Ranjan', 'mentor_email': 'piyush.27ranjan@gmail.com', 'tag': ['Python'], 'link': 'https://github.com/piyush27ranjan/Add-cover-art', 'comm': 'https://join.slack.com/t/addcoverart/shared_invite/enQtNDgyMDQxNDA1NzgwLWVhYzM0MDhiODY5ZTc1MzFmODIyZmVjYjQ4MmFiOTdmYTU3ODFiZDEwMjAyYjFlY2E1Mjc3NjQ1OGZhYTliZTU', 'img': 'https://github.com/piyush27ranjan.png?size=50'},
{'title': 'Alphynite', 'id': 2, 'btnid': 1002, 'intro': 'Alphynite is an online B2B platform where sellers can sell their products and buyers can buy as well as post their requirements. Currently , project is in in...', 'intro_full': 'Alphynite is an online B2B platform where sellers can sell their products and buyers can buy as well as post their requirements. Currently , project is in initial stages.', 'mentor': 'Shubham Kumar', 'mentor_email': 'sk9331657@gmail.com', 'tag': ['Javascript', 'Typescript', 'Css', 'Html'], 'link': 'https://github.com/sk9331657/Alphynite', 'comm': 'https://gitter.im/Alphynite/Lobby', 'img': 'https://github.com/sk9331657.png?size=50'},
{'title': 'Anna Assistant', 'id': 3, 'btnid': 1003, 'intro': "Anna is a community driven ambitious virtual assistant on Google Chrome to help people Automate actions using Voice. 🐘  Sounds boring. Let's try again.  Meet...", 'intro_full': 'Anna is a community driven ambitious virtual assistant on Google Chrome to help people Automate actions using Voice. 🐘  Sounds boring. Let\'s try again.  Meet Anna, your very own personal assistant on Google Chrome Webstore. It will make your life so effort less. You don\'t have to open broswer and type your broswer what to do. Instead just talk to your computer, like it is your best friend.  It won\'t do everything, but it will reduce the time to do certain things. You want to take a screenshot, say "hey, screenshot". You want to open a website like facebook, say "hey, open facebook". It can do so much more. When you have a voice, speak up. Don\'t type.', 'mentor': 'Gautham Santhosh', 'mentor_email': 'thabeatsz@gmail.com', 'tag': ['Html', 'Css', 'Javascript', 'Shell', 'Chrome-extension', 'Chrome', 'Assistant', 'Contributions-welcome', 'Anna', 'Opencode'], 'link': 'https://github.com/Anna-Assistant/Anna', 'comm': 'https://anna.zulipchat.com', 'img': 'https://github.com/Anna-Assistant.png?size=50'},
{'title': 'Artemis Arrow', 'id': 4, 'btnid': 1004, 'intro': 'A Web App that downloads songs, anime, books and any form of entertainment. It also provides an option to upload the downloaded content to Google Drive', 'intro_full': 'A Web App that downloads songs, anime, books and any form of entertainment. It also provides an option to upload the downloaded content to Google Drive', 'mentor': 'Kousshik Raj', 'mentor_email': 'kousshikraj.raj@gmail.com', 'tag': ['Python', 'Webscraping', 'Python3', 'Flask-application', 'Oauth2', 'Server'], 'link': 'https://github.com/TheLethalCode/Artemis-arrow', 'comm': 'https://join.slack.com/t/artemisarrow/shared_invite/enQtNDg2NDM5MTI3MzEyLTc0MTgzNThmZTNkNzEyZGZlODk1ODczMWMyMmMyMzFiOGRjMjM2NWEzZGNjMTlkZjY2MzgzZjgwODFmNTU3MDQ', 'img': 'https://github.com/TheLethalCode.png?size=50'},
{'title': 'Awesome-nlp', 'id': 5, 'btnid': 1005, 'intro': 'A curated list of Natural Language Processing tools, tutorials and other resources', 'intro_full': 'A curated list of Natural Language Processing tools, tutorials and other resources', 'mentor': 'Dhruv Apte', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Natural-language-processing', 'Deep-learning', 'Machine-learning', 'Language', 'Awesome', 'Awesome-list', 'Nlp', 'Text-mining'], 'link': 'https://github.com/keon/awesome-nlp', 'comm': 'https://gitter.im/awesome-nlp/Lobby', 'img': 'https://github.com/keon.png?size=50'},
{'title': 'B.E.N.J.I.', 'id': 6, 'btnid': 1006, 'intro': 'A digital assistant that performs myriad task using speech recognition', 'intro_full': 'A digital assistant that performs myriad task using speech recognition', 'mentor': 'Dhruv Apte', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Python', 'Shell', 'Python3', 'Speech-recognition', 'Speech-to-text', 'Digital-assistant'], 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'comm': 'https://gitter.im/B-E-N-J-I/Lobby', 'img': 'https://github.com/the-ethan-hunt.png?size=50'},
{'title': 'Ball Sacker', 'id': 7, 'btnid': 1007, 'intro': 'Basic top down 2D shooter game in C++ and OpenCV', 'intro_full': 'Basic top down 2D shooter game in C++ and OpenCV', 'mentor': 'Arnav Tiwari', 'mentor_email': 'avznav@gmail.com', 'tag': ['Makefile', 'C++', 'Game', 'Ai', 'A-star-algorithm', '2d-game', '2d-graphics'], 'link': 'https://github.com/arnav-t/Shooting-Game', 'comm': 'https://gitter.im/BallSackerChat/', 'img': 'https://github.com/arnav-t.png?size=50'},
{'title': 'BrkOut', 'id': 8, 'btnid': 1008, 'intro': ' A prison escape game with a blend of brick breaking gameplay and innovative implementation of the same to get the look of an escape.', 'intro_full': ' A prison escape game with a blend of brick breaking gameplay and innovative implementation of the same to get the look of an escape.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python'], 'link': 'https://github.com/thealphadollar/brkout', 'comm': 'https://gitter.im/brkout_/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
{'title': 'ClubComing', 'id': 9, 'btnid': 1009, 'intro': 'A website to part-automate Club interview process across Colleges', 'intro_full': 'A website to part-automate Club interview process across Colleges', 'mentor': 'Utkarsh Singh', 'mentor_email': 'utkarshsingh369@gmail.com', 'tag': ['Javascript', 'Html', 'Css', 'Tex', 'Python', 'Mongodb', 'Nodejs', 'Latex', 'Python3', 'Jsonwebtoken'], 'link': 'https://github.com/utkarshsingh99/ClubComing', 'comm': 'https://gitter.im/ClubComing/clubcoming', 'img': 'https://github.com/utkarshsingh99.png?size=50'},
{'title': 'Colorls', 'id': 10, 'btnid': 1010, 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons. :tada:", 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons. :tada:", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'Shell', 'Color', 'Icons', 'Ls', 'Terminal', 'Cli', 'Gem', 'Eye-candy'], 'link': 'https://github.com/athityakumar/colorls', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'Daru', 'id': 11, 'btnid': 1011, 'intro': 'Data Analysis in RUby', 'intro_full': 'Data Analysis in RUby', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'Html'], 'link': 'https://github.com/SciRuby/daru', 'comm': 'https://groups.google.com/forum/#!forum/sciruby-dev', 'img': 'https://github.com/SciRuby.png?size=50'},
{'title': 'DashVis', 'id': 12, 'btnid': 1012, 'intro': 'An open-source Dashboard built for users, to organize their resources via Tables and Folders', 'intro_full': 'An open-source Dashboard built for users, to organize their resources via Tables and Folders', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'Javascript', 'Css', 'Html', 'Dashboard', 'Open-source', 'Datatables', 'Tables', 'Folders', 'Ui', 'Rails5', 'Ruby-on-rails'], 'link': 'https://github.com/athityakumar/DashVis', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'Erp-Auto-Login', 'id': 13, 'btnid': 1013, 'intro': 'A chrome extension that you have to setup just one time, to automatically login to your IITKGP ERP account every time. Just install the chrome extension, and...', 'intro_full': "A chrome extension that you have to setup just one time, to automatically login to your IITKGP ERP account every time. Just install the chrome extension, and click on the extension logo (IIT Kharagpur's logo) to setup your login credentials.", 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Javascript', 'Html'], 'link': 'https://github.com/metakgp/erp-auto-login', 'comm': 'https://gitter.im/erp-auto-login/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'Facebook-archive', 'id': 14, 'btnid': 1014, 'intro': "Just some fun you can have with facebook's archive data", 'intro_full': "Just some fun you can have with facebook's archive data", 'mentor': 'Kaustubh Hiware', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Python', 'Data-visualization', 'Data', 'Facebook'], 'link': 'https://github.com/kaustubhhiware/facebook-archive', 'comm': 'https://gitter.im/facebook-archive/', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
{'title': 'GYFT', 'id': 15, 'btnid': 1015, 'intro': ' Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'intro_full': ' Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Timetable', 'Erp', 'Gyft', 'Ics', 'Google-calendar'], 'link': 'https://github.com/metakgp/gyft', 'comm': 'https://gitter.im/gyft_/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'Google Assistant Slack', 'id': 16, 'btnid': 1016, 'intro': 'A Google Assistant that helps you on Slack', 'intro_full': 'A Google Assistant that helps you on Slack', 'mentor': 'Matej Plavevski', 'mentor_email': 'matej.plavevski+github@gmail.com', 'tag': ['Javascript', 'Bot', 'Slack', 'Nodejs', 'Botkit', 'Botkit-bots'], 'link': 'https://github.com/MatejMecka/GoogleAssistantSlack', 'comm': 'https://gitter.im/GoogleAssistantSlack/Lobby#', 'img': 'https://github.com/MatejMecka.png?size=50'},
{'title': 'Hercules', 'id': 17, 'btnid': 1017, 'intro': "The mighty hero helping you build projects on top of IIT Kharagpur's academic data", 'intro_full': "The mighty hero helping you build projects on top of IIT Kharagpur's academic data", 'mentor': 'Kshitij', 'mentor_email': 'kshitijsaraogi@gmail.com', 'tag': ['Dockerfile', 'Go', 'Python', 'Makefile', 'Css'], 'link': 'https://github.com/kshitij10496/hercules', 'comm': 'metakgp.slack.com', 'img': 'https://github.com/kshitij10496.png?size=50'},
{'title': 'INSAT Clouds', 'id': 18, 'btnid': 1018, 'intro': 'Analyze and generate animated GIFs from INSAT cloud cover maps', 'intro_full': 'Analyze and generate animated GIFs from INSAT cloud cover maps', 'mentor': 'Arnav Tiwari', 'mentor_email': 'avznav@gmail.com', 'tag': ['Python', 'Python3', 'Gif-animation', 'Web', 'Weather-api', 'Weather-forecast', 'Cloud-data'], 'link': 'https://github.com/arnav-t/insat-clouds', 'comm': 'https://gitter.im/INSAT-CloudsChat/', 'img': 'https://github.com/arnav-t.png?size=50'},
{'title': 'Ignitus', 'id': 19, 'btnid': 1019, 'intro': 'Building A clone of AngelList, but for researchers and students that will bridge the gap between students and university Profs., RA, PHD Students. We run Ign...', 'intro_full': 'Building A clone of AngelList, but for researchers and students that will bridge the gap between students and university Profs., RA, PHD Students. We run Ignitus as a Non-Profit and is been supported by prestegious institution of the world and  we our entire code base is open-sourced.', 'mentor': 'divyanshu rawat', 'mentor_email': 'divyanshu.r46956@gmail.com', 'tag': ['Html', 'Css', 'Javascript', 'Dockerfile', 'React', 'Redux', 'Travis-ci', 'Heroku', 'Prop-types', 'Redux-thunk', 'Docker-container', 'Redux-sagas', 'Flow', 'Reselect', 'Jest-tests', 'Istanbul'], 'link': 'https://github.com/Ignitus/Ignitus-Client-Side-Development', 'comm': 'Slack(https://goo.gl/RCeffA)', 'img': 'https://github.com/Ignitus.png?size=50'},
{'title': 'Imagery', 'id': 20, 'btnid': 1020, 'intro': 'Imagery is a slack bot that takes any uploaded image, hosts it on Imgur and posts the link to the same channel after deleting the uploaded image, thus, savin...', 'intro_full': 'Imagery is a slack bot that takes any uploaded image, hosts it on Imgur and posts the link to the same channel after deleting the uploaded image, thus, saving space on a free plan.', 'mentor': 'Dibya Prakash Das', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['Python', 'Imgur', 'Slack', 'Heroku', 'Flask', 'Bot'], 'link': 'https://github.com/dibyadas/imagery', 'comm': 'https://join.slack.com/t/dpdtesting/shared_invite/enQtNDkzMzgxMDM5MjA2LTY2OGVjZGY2MzM1YzgxMGIwMWNmOWQ0Y2QyZjcxMDk1NzQ4M2MxNjkxNTVhM2VmMGU3ZWJhMTU0YmI4NzI4NTQ', 'img': 'https://github.com/dibyadas.png?size=50'},
{'title': 'In-time', 'id': 21, 'btnid': 1021, 'intro': 'The app will help students to get all the work done in time and track his activities The students will be notified about their timetable, classes to attend, ...', 'intro_full': 'The app will help students to get all the work done in time and track his activities The students will be notified about their timetable, classes to attend, other todos to be done. It will help the student keep track of the number of class he/she has missed. It will also show motiviational quotes with todos to be done so that the student stays motivated.', 'mentor': 'Nityananda Gohain', 'mentor_email': 'nityanandagohain@gmail.com', 'tag': ['Java', 'Objective-c', 'Dart', 'Flutter', 'Android', 'Ios'], 'link': 'https://github.com/nityanandagohain/in-time', 'comm': 'https://gitter.im/in_time/Lobby#', 'img': 'https://github.com/nityanandagohain.png?size=50'},
{'title': 'Interactive Force Directed Graph', 'id': 22, 'btnid': 1022, 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph. Different information like the deg...', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph. Different information like the degree centrality, betweenness centrality and clustering co-efficient is displayed. ', 'mentor': 'Dibya Prakash Das', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['Python', 'Css', 'Html', 'D3js', 'Graph', 'Networkx', 'Javascript'], 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'comm': 'https://join.slack.com/t/dpdtesting/shared_invite/enQtNDkzMzgxMDM5MjA2LTY2OGVjZGY2MzM1YzgxMGIwMWNmOWQ0Y2QyZjcxMDk1NzQ4M2MxNjkxNTVhM2VmMGU3ZWJhMTU0YmI4NzI4NTQ', 'img': 'https://github.com/dibyadas.png?size=50'},
{'title': 'Karate', 'id': 23, 'btnid': 1023, 'intro': 'Test Automation made Simple', 'intro_full': 'Test Automation made Simple', 'mentor': 'Peter Thomas', 'mentor_email': 'ptrthomas@gmail.com', 'tag': ['Java', 'Gherkin', 'Javascript', 'Html', 'Css', 'Testing', 'Rest', 'Graphql', 'Test-automation', 'Bdd', 'Soap', 'Assertions', 'Microservices', 'Testing-tools', 'Mock-server', 'Http'], 'link': 'https://github.com/intuit/karate', 'comm': 'E-mail me for Invites to the communication channel', 'img': 'https://github.com/intuit.png?size=50'},
{'title': 'Keep-Clone', 'id': 24, 'btnid': 1024, 'intro': 'A google keep clone', 'intro_full': 'A google keep clone', 'mentor': 'Nityananda Gohain', 'mentor_email': 'nityanandagohain@gmail.com', 'tag': ['Html', 'Css', 'Javascript'], 'link': 'https://github.com/nityanandagohain/keep_clone', 'comm': 'https://gitter.im/keep-clone/Lobby', 'img': 'https://github.com/nityanandagohain.png?size=50'},
{'title': 'Kronos', 'id': 25, 'btnid': 1025, 'intro': 'A webapp to serve past year records-grade distributions of IITKGP', 'intro_full': 'A webapp to serve past year records-grade distributions of IITKGP', 'mentor': 'Ayush Kaushal', 'mentor_email': 'ayushk4@gmail.com', 'tag': ['Html', 'Css', 'Python', 'Python3', 'Javascript', 'Webapp', 'Academics-kgp', 'Metakgp'], 'link': 'https://github.com/metakgp/Kronos', 'comm': 'metakgp.slack.com', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'MFQP', 'id': 26, 'btnid': 1026, 'intro': "MetaKGP's solution to finding past years' questions paper for all subjects; provided by students for students.", 'intro_full': "MetaKGP's solution to finding past years' questions paper for all subjects; provided by students for students.", 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Javascript', 'Css', 'Ruby', 'Shell', 'Python', 'Search', 'Fuzzy-search', 'Question-papers', 'Previous', 'Years', 'Metakgp'], 'link': 'https://github.com/metakgp/mfqp', 'comm': 'https://gitter.im/mfqp/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'Medium_Grabber', 'id': 27, 'btnid': 1027, 'intro': 'This is an automated program that lets you grab the link of any article under any topic just by logging into your Google-medium account.', 'intro_full': 'This is an automated program that lets you grab the link of any article under any topic just by logging into your Google-medium account.', 'mentor': 'Abhishek Singh', 'mentor_email': 'abhishek.nitdgp.98@gmail.com', 'tag': ['Python', 'Python3', 'Selenium-webdriver', 'Selenium-python'], 'link': 'https://github.com/NITDgpOS/Medium_Grabber', 'comm': 'https://gitter.im/Medium_Grabber/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'title': 'Melonicious', 'id': 28, 'btnid': 1028, 'intro': 'An Android app that tracks the daily commits of a given set of GitHub users', 'intro_full': 'An Android app that tracks the daily commits of a given set of GitHub users', 'mentor': 'Abhilash Gunasegaran', 'mentor_email': 'abhilash.ag1997@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/AbhilashG97/Melonicious', 'comm': 'https://gitter.im/Melonicious/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/AbhilashG97.png?size=50'},
{'title': 'Meme Finder', 'id': 29, 'btnid': 1029, 'intro': 'Meme Retrieval Engine : Find relevant memes', 'intro_full': 'Meme Retrieval Engine : Find relevant memes', 'mentor': 'Aniq Ur Rahman', 'mentor_email': 'aniqrah@gmail.com', 'tag': ['Shell', 'Python', 'Ocr', 'Memes', 'Reddit', 'Scraper', 'Tkinter', 'Search-engine', 'Nltk'], 'link': 'https://github.com/NITDgpOS/MemeFinder', 'comm': 'https://gitter.im/NIT-dgp/General', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'title': 'Memoir', 'id': 30, 'btnid': 1030, 'intro': 'A simple and easy to use app to keep your journal entries in an interesting way.', 'intro_full': 'A simple and easy to use app to keep your journal entries in an interesting way.', 'mentor': 'Sagar', 'mentor_email': 'sagar9268@yahoo.com', 'tag': ['Java'], 'link': 'https://github.com/sagar9268/Memoir', 'comm': 'https://gitter.im/Memoir123/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/sagar9268.png?size=50'},
{'title': 'Merkalysis', 'id': 31, 'btnid': 1031, 'intro': 'A marketing tool that enables people to increase the reach of their products/accounts through organic marketing methods. Involves basic machine learning conc...', 'intro_full': 'A marketing tool that enables people to increase the reach of their products/accounts through organic marketing methods. Involves basic machine learning concepts.', 'mentor': 'Rahul Arulkumaran', 'mentor_email': 'rahulkumaran313@gmail.com', 'tag': ['Python', 'Css', 'Javascript', 'Html', 'Python3', 'Nlp', 'Nlp-machine-learning', 'Api', 'Django', 'Machine-learning', 'Marketing', 'Tool', 'Sklearn', 'Zulip-bot', 'Frontend', 'Backend'], 'link': 'https://github.com/rahulkumaran/merkalysis', 'comm': 'rahulkumaran313@gmail.com', 'img': 'https://github.com/rahulkumaran.png?size=50'},
{'title': 'Messiah', 'id': 32, 'btnid': 1032, 'intro': 'A service to help save lives and prevent economic losses through mechanisms to predict, prevent, and manage the impact of natural disasters, as accurately as...', 'intro_full': 'A service to help save lives and prevent economic losses through mechanisms to predict, prevent, and manage the impact of natural disasters, as accurately as possible.', 'mentor': 'Anuprava Chatterjee', 'mentor_email': 'anuprava.livetowin@gmail.com', 'tag': ['Python', 'Html', 'Css', 'Javascript', 'Php'], 'link': 'https://github.com/thealphadollar/messiah', 'comm': 'https://gitter.im/kwoc-messiah/', 'img': 'https://github.com/thealphadollar.png?size=50'},
{'title': 'MetaApp', 'id': 33, 'btnid': 1033, 'intro': 'This will be an android app for most of the metakgp Projects included in a single Android app.', 'intro_full': 'This will be an android app for most of the metakgp Projects included in a single Android app.', 'mentor': 'RISHABHDEEP SINGH', 'mentor_email': 'rishabhdeepsingh98@gmail.com', 'tag': ['Kotlin', 'Java', 'Android', 'Iitkgp'], 'link': 'https://github.com/rishabhdeepsingh/MetaApp', 'comm': 'https://gitter.im/Rishabhdeepsingh/MetaApp', 'img': 'https://github.com/rishabhdeepsingh.png?size=50'},
{'title': 'MetaKGP-wiki', 'id': 34, 'btnid': 1034, 'intro': 'The one source all solution wiki of IIT Kharagpur', 'intro_full': 'The one source all solution wiki of IIT Kharagpur', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Php', 'Shell', 'Python', 'Dockerfile', 'Docker', 'Metakgp', 'Server', 'Nginx', 'Mediawiki'], 'link': 'https://github.com/metakgp/metakgp-wiki', 'comm': 'https://gitter.im/metakgp-wiki/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'Moboff', 'id': 35, 'btnid': 1035, 'intro': 'A CLI to download, convert and send youtube videos to several devices using Pushbullet.', 'intro_full': 'A CLI to download, convert and send youtube videos to several devices using Pushbullet.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Dockerfile', 'Youtube-dl', 'Offline-storage', 'Music-downloader', 'Click', 'Command-line-tool'], 'link': 'https://github.com/Parth-Vader/MobOff', 'comm': 'Kwoc2017-parth.slack.com', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'title': 'Mysite', 'id': 36, 'btnid': 1036, 'intro': 'It is a blogging app made in django', 'intro_full': 'It is a blogging app made in django', 'mentor': 'Akshit jain', 'mentor_email': 'akshjain.jain74@gmail.com', 'tag': ['Python', 'Css', 'Javascript', 'Html', 'Pyhton3', 'Django-framework', 'Git', 'Bootstrap', 'Linux'], 'link': 'https://github.com/AkshJain99/mysite', 'comm': 'https://gitter.im/Akshjain99/Lobby', 'img': 'https://github.com/AkshJain99.png?size=50'},
{'title': 'Naarad', 'id': 37, 'btnid': 1037, 'intro': 'Naarad aggregates all your KGP related news from facebook pages to one place. Go to http://naarad.metakgp.org to see it working.', 'intro_full': 'Naarad aggregates all your KGP related news from facebook pages to one place. Go to http://naarad.metakgp.org to see it working.', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Shell', 'Python', 'Ruby'], 'link': 'https://github.com/metakgp/naarad-source', 'comm': 'http://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'Nephos', 'id': 38, 'btnid': 1038, 'intro': 'Project Nephos aims at simplifying the process of moving samples from local storage to cloud for Universities by automating, almost, all the steps involved. ...', 'intro_full': 'Project Nephos aims at simplifying the process of moving samples from local storage to cloud for Universities by automating, almost, all the steps involved. It consists of three independent modules; recording module, processing module, and uploading module. Nephos is developed, using Python and few other open source projects. To accomplish all the above mentioned tasks with cent-percent reliability and zero failures (unless wrong data is input, which gets logged), testing and logging is an integral part of Nephos development and running cycle, respectively.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Makefile', 'Shell', 'Ccextractor', 'Nephos', 'Universities', 'Subtitles-parsing', 'Closed-captions', 'Ffmpeg', 'Ffprobe', 'Sqlite3', 'Click', 'Cli-app', 'Apscheduler'], 'link': 'https://github.com/thealphadollar/nephos', 'comm': 'https://www.ccextractor.org/public:general:support', 'img': 'https://github.com/thealphadollar.png?size=50'},
{'title': 'News 24/7', 'id': 39, 'btnid': 1039, 'intro': 'News 24/7 is a News app which fetches news articles from JSON provided by Guardian API.  As of now, it can show only English and Telugu languages. This app m...', 'intro_full': 'News 24/7 is a News app which fetches news articles from JSON provided by Guardian API.  As of now, it can show only English and Telugu languages. This app made with Android Architecture Components like LiveData and ViewModel. There are a few issues in app and some more features need to be added. This app is also uploaded in Play Store but not with Architecture Components but has Loaders to handle background threads.', 'mentor': 'Syed Zeeshan', 'mentor_email': 'sdzshn3@gmail.com', 'tag': ['Java', 'News', 'Json', 'Recyclerview', 'Android', 'Architecture-components'], 'link': 'https://github.com/sdzshn3/News24-7-RV', 'comm': 'https://groups.google.com/d/forum/news247kwoc', 'img': 'https://github.com/sdzshn3.png?size=50'},
{'title': 'NxDraft', 'id': 40, 'btnid': 1040, 'intro': 'NxDraft does exactly what the name suggests; it creats N drafts from one.', 'intro_full': 'NxDraft does exactly what the name suggests; it creats N drafts from one.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python'], 'link': 'https://github.com/thealphadollar/NxDraft', 'comm': 'https://gitter.im/NxDraft/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
{'title': 'OnThisDay', 'id': 41, 'btnid': 1041, 'intro': 'The application goes through all the messages sent previously in the organisation on the same day (in the last 6 years or last 6 months) and revives the mess...', 'intro_full': "The application goes through all the messages sent previously in the organisation on the same day (in the last 6 years or last 6 months) and revives the message with the highest number of reactions, and sends it to the 'random' channel.", 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Go', 'Html'], 'link': 'https://github.com/thealphadollar/OnThisDay', 'comm': 'https://gitter.im/_OnThisDay/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
{'title': 'OpenCI', 'id': 42, 'btnid': 1042, 'intro': 'Open-source Travis CI client built from ground zero.  Ever wished of triggering or sharing those code tests right from your mobile device? Well, OpenCI does ...', 'intro_full': 'Open-source Travis CI client built from ground zero.  Ever wished of triggering or sharing those code tests right from your mobile device? Well, OpenCI does just that. Now test and deploy with confidence with Travis CI on the go.', 'mentor': 'Brijesh A Shah', 'mentor_email': 'brijeshjain13@gmail.com', 'tag': ['Java', 'Openci', 'Travis-ci', 'Android', 'Android-app', 'Travis-ci-client', 'Android-travis-ci', 'Android-application'], 'link': 'https://github.com/brijeshshah13/OpenCI', 'comm': 'https://discord.gg/B6QVMmS', 'img': 'https://github.com/brijeshshah13.png?size=50'},
{'title': 'Pelican', 'id': 43, 'btnid': 1043, 'intro': 'Chrome extension for better Facebook ', 'intro_full': 'Chrome extension for better Facebook ', 'mentor': 'Gautham Santhosh', 'mentor_email': 'thabeatsz@gmail.com', 'tag': ['Css', 'Javascript', 'Html', 'Facebook', 'Chrome-extension', 'Minimal', 'Focus-mode'], 'link': 'https://github.com/aviary-apps/Pelican', 'comm': 'https://gitter.im/PelicanExtension', 'img': 'https://github.com/aviary-apps.png?size=50'},
{'title': 'PyQt Calculator', 'id': 44, 'btnid': 1044, 'intro': 'A scientific calculator based on python using PyQt UI', 'intro_full': 'A scientific calculator based on python using PyQt UI', 'mentor': 'Taapas Agrawal', 'mentor_email': 'taapas2897@gmail.com', 'tag': ['Python', 'Pyqt4'], 'link': 'https://github.com/taapas1128/Calculator_pyqt', 'comm': 'https://join.slack.com/t/kwoccalculatorproject/shared_invite/enQtNDk0MTAzNDQ5NDk1LTI4MTI3YjcwN2Y4MzU2YTg5ZDgzZmI5YTc2ZTY4M2VhY2NjMDBkYWYzMTAyYjYxMGZhNWJjMWZjMjliZDA5NzY', 'img': 'https://github.com/taapas1128.png?size=50'},
{'title': 'Pygame-Coin-Fall', 'id': 45, 'btnid': 1045, 'intro': 'Use your arrow keys to collect as many falling coins as possible in 30 seconds. Avoid the bombs!', 'intro_full': 'Use your arrow keys to collect as many falling coins as possible in 30 seconds. Avoid the bombs!', 'mentor': 'Vineet Jiji Cherian', 'mentor_email': 'vineetjc@yahoo.com', 'tag': ['Python', 'Pygame', 'Game', 'Coin-fall'], 'link': 'https://github.com/vineetjc/pygame-Coin-Fall-', 'comm': 'https://gitter.im/pygame-Coin-Fall/', 'img': 'https://github.com/vineetjc.png?size=50'},
{'title': 'Question Answering Over Linked Data', 'id': 46, 'btnid': 1046, 'intro': 'Given a natural language query, this application will try to provide relevant answers by generating SPARQL queries to lookup DBpedia.', 'intro_full': 'Given a natural language query, this application will try to provide relevant answers by generating SPARQL queries to lookup DBpedia.', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Python', 'Html', 'Javascript', 'Nlp', 'Scrapping', 'Sparql'], 'link': 'https://github.com/americast/QALD', 'comm': 'https://gitter.im/QALD/Lobby#', 'img': 'https://github.com/americast.png?size=50'},
{'title': 'Quiz', 'id': 47, 'btnid': 1047, 'intro': 'It is a Quiz android application which uses Open Trivia Api', 'intro_full': 'It is a Quiz android application which uses Open Trivia Api', 'mentor': 'Sai Rajendra Immadi', 'mentor_email': 'immadirajendra.sai@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/immadisairaj/Quiz', 'comm': 'https://gitter.im/immadisairaj/Quiz', 'img': 'https://github.com/immadisairaj.png?size=50'},
{'title': 'React-Calculator', 'id': 48, 'btnid': 1048, 'intro': 'It is a reactjs based simple calculator which need to add functionality. It was built on react stater kit.', 'intro_full': 'It is a reactjs based simple calculator which need to add functionality. It was built on react stater kit.', 'mentor': 'Chandra Prakash Meher', 'mentor_email': 'b115022@iiit-bh.ac.in', 'tag': ['Javascript', 'Html', 'Css'], 'link': 'https://github.com/cmeher196/React-Calculator', 'comm': 'https://gitter.im/React-calc-team/Lobby', 'img': 'https://github.com/cmeher196.png?size=50'},
{'title': 'RedDash', 'id': 49, 'btnid': 1049, 'intro': 'redType : We provide a simple chat system for the victim as well as the rescuer so that they can effectively communicate with each other, even without intern...', 'intro_full': 'redType : We provide a simple chat system for the victim as well as the rescuer so that they can effectively communicate with each other, even without internet connectivity. redType is an Android app with basic SMS functionality brought to life through the Twilio API. ', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Css', 'Javascript', 'Html', 'Java', 'Python3', 'Social-media', 'Flask', 'Machine-learning', 'Twitter-api', 'Twilio-api'], 'link': 'https://github.com/Parth-Vader/The-Martini-Men', 'comm': 'Kwoc2017-parth.slack.com', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'title': 'Rose', 'id': 50, 'btnid': 1050, 'intro': 'Analyse all kinds of TV series data', 'intro_full': 'Analyse all kinds of TV series data', 'mentor': 'Kaustubh Hiware', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Python', 'Scraper', 'Tv-shows', 'Tv-series'], 'link': 'https://github.com/kaustubhhiware/rose', 'comm': 'https://gitter.im/rose_', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
{'title': 'Salvator', 'id': 51, 'btnid': 1051, 'intro': 'Salvator is a bot which uses puppeteer to scrape the list of birthdays from facebook and sends them a personal message.  It also sends the user an email noti...', 'intro_full': 'Salvator is a bot which uses puppeteer to scrape the list of birthdays from facebook and sends them a personal message.  It also sends the user an email notification with the list of birthdays and their profile link.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Javascript', 'Messenger', 'Bot', 'Puppeteer', 'Headless-chrome'], 'link': 'https://github.com/thealphadollar/salvator', 'comm': 'https://gitter.im/salvator_/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
{'title': 'Sangita', 'id': 52, 'btnid': 1052, 'intro': 'A Natural Language Toolkit for Indian Languages', 'intro_full': 'A Natural Language Toolkit for Indian Languages', 'mentor': 'Samriddhi Sinha', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'tag': ['Python', 'Natural-language-processing', 'Deep-learning', 'Deep-neural-networks', 'Lstm', 'Recurrent-neural-networks', 'Machine-learning'], 'link': 'https://github.com/SangitaNLP/Sangita', 'comm': 'https://join.slack.com/t/sangitanlp/shared_invite/enQtMzc2NzMzODQ2ODU1LTRkOTUwODViMDBlNjIzZGNhZWIzNzc5MjM0Y2Y3YjYzMWY1NThjYmVkY2Y4M2RhODU5NzQ0MzZmODE4NmQ4ZmU', 'img': 'https://github.com/SangitaNLP.png?size=50'},
{'title': 'Search the Key', 'id': 53, 'btnid': 1053, 'intro': "A game in which player searches for a key in a 5x5 grid in 6 turns with indications on how 'hot' or 'cold' they are with respect to the location of the key. ...", 'intro_full': "A game in which player searches for a key in a 5x5 grid in 6 turns with indications on how 'hot' or 'cold' they are with respect to the location of the key. Made using Python and Pygame.", 'mentor': 'Vineet Jiji Cherian', 'mentor_email': 'vineetjc@yahoo.com', 'tag': ['Python', 'Pygame', 'Game'], 'link': 'https://github.com/vineetjc/pygame-Search-the-Key', 'comm': 'https://gitter.im/pygame-Search-the-Key', 'img': 'https://github.com/vineetjc.png?size=50'},
{'title': 'Set_Proxy', 'id': 54, 'btnid': 1054, 'intro': ' The script in the repository sets/unsets proxy for most frequently used commands in the Ubuntu/Debian system.', 'intro_full': ' The script in the repository sets/unsets proxy for most frequently used commands in the Ubuntu/Debian system.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Shell', 'Debian', 'Ubuntu', 'Sets-proxy', 'Automatisation'], 'link': 'https://github.com/CodeStash-KGP/set_proxy', 'comm': 'https://gitter.im/set_proxy/Lobby', 'img': 'https://github.com/CodeStash-KGP.png?size=50'},
{'title': 'Shuffle', 'id': 55, 'btnid': 1055, 'intro': 'A simple game made with wxPython alike GNOME games', 'intro_full': 'A simple game made with wxPython alike GNOME games', 'mentor': 'Navaneeth Suresh', 'mentor_email': 'navaneeths1998@gmail.com', 'tag': ['Shell', 'Python', 'Game', 'Logic-game'], 'link': 'https://github.com/themousepotato/shuffle', 'comm': 'https://groups.google.com/forum/#!forum/shuffle-devel/', 'img': 'https://github.com/themousepotato.png?size=50'},
{'title': 'Snakes', 'id': 56, 'btnid': 1056, 'intro': 'A Snakes game based on OpenCV', 'intro_full': 'A Snakes game based on OpenCV', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['C++', 'Makefile', 'Cpp', 'Opencv', 'Snake-game'], 'link': 'https://github.com/americast/Snakes', 'comm': 'https://gitter.im/opencv-Snakes/Lobby', 'img': 'https://github.com/americast.png?size=50'},
{'title': 'Social Open Source Platform - DONUT', 'id': 57, 'btnid': 1057, 'intro': 'Being Inspired from the Cornucopia of various Social hub this project has been developed taking into consideration about open Ource. Well this is an Open Sou...', 'intro_full': 'Being Inspired from the Cornucopia of various Social hub this project has been developed taking into consideration about open Ource. Well this is an Open Source Socia networking hub which act as a bridge between various Developers, Organisations and Open Source aspirants to elaborate on various things like #Projects, #Events, #Discussion on various researches, #Scholarships, #Coding release and various other things updates.  The more priority of this project has been that this platform allows users to make their project "Open Sourced" and relesed them under various open SOurce Organisations, Experst which holds up a ring plate on this portal. This platform also make users to introduce and develops various olutions in the form of FOSS softwares to publish them for people use by integrating them with their social cause. Moreover this project can be doenloaded by any User, Organisation and can be used by them in their own custom way , making it run on their servers.  It is built on Node.js and utilizing mongoose as database.', 'mentor': 'Jaskirat Singh', 'mentor_email': 'juskirat2000@gmail.com', 'tag': ['Javascript', 'Html', 'Css', 'Socialnetwork', 'Nodejs', 'Nodejs-framework', 'Mongodb', 'Open', 'Open-source', 'Web-framework', 'Express-js', 'Vuejs', 'Html-css'], 'link': 'https://github.com/codeuino/Social-Platform-Donut/tree/development', 'comm': 'https://goo.gl/NYKWNx , https://groups.google.com/forum/#!forum/codeuino-devel', 'img': 'https://github.com/codeuino.png?size=50'},
{'title': 'Sound Haven', 'id': 58, 'btnid': 1058, 'intro': 'A music player using Electron and Angular 6', 'intro_full': 'A music player using Electron and Angular 6', 'mentor': 'Nityananda Gohain', 'mentor_email': 'nityanandagohain@gmail.com', 'tag': ['Javascript', 'Css', 'Html', 'Typescript'], 'link': 'https://github.com/nityanandagohain/SoundHaven', 'comm': 'https://gitter.im/sound-haven/Lobby#', 'img': 'https://github.com/nityanandagohain.png?size=50'},
{'title': 'Stock Market Forecasting ', 'id': 59, 'btnid': 1059, 'intro': 'Using a deep convolutional neural network to model the combined influence of long-term events and short-term events on stock price movements', 'intro_full': 'Using a deep convolutional neural network to model the combined influence of long-term events and short-term events on stock price movements', 'mentor': 'Vedic Partap', 'mentor_email': 'vedicpartap1999@gmail.com', 'tag': ['Python'], 'link': 'https://github.com/vedic-partap/Event-Driven-Stock-Prediction-using-Deep-Learning', 'comm': 'https://join.slack.com/t/stock-market27/shared_invite/enQtNDgzMjY3Njg0OTY3LWUxNDk3ZGUzNWE2MWMwMmU3MmQzYjBjNzAwMDVmOWFkYTljMTQ2NzIxNWI1YzI5MmQ1ZmQ4OGM5MDViZjI0MDE', 'img': 'https://github.com/vedic-partap.png?size=50'},
{'title': 'StudentPortal', 'id': 60, 'btnid': 1060, 'intro': 'An Django based student web-app for college use.', 'intro_full': 'An Django based student web-app for college use.', 'mentor': 'Monsij Biswal', 'mentor_email': 'biswalmonsij@gmail.com', 'tag': ['Python', 'Css', 'Html', 'Javascript'], 'link': 'https://github.com/monsij/StudentPortal', 'comm': 'https://gitter.im/NIT-DGPortal-main/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/monsij.png?size=50'},
{'title': 'SudoCode', 'id': 61, 'btnid': 1061, 'intro': 'A tool for beginners to get started with coding. On using this tool, one need not know how to code explicitly in a particular language. Instead, people can w...', 'intro_full': 'A tool for beginners to get started with coding. On using this tool, one need not know how to code explicitly in a particular language. Instead, people can write pseudo codes and the program converts them into C codes, improves code readability and quality and finally executes the code automatically for the user. ', 'mentor': 'Rahul Arulkumaran', 'mentor_email': 'rahulkumaran313@gmail.com', 'tag': ['Python', 'C'], 'link': 'https://github.com/rahulkumaran/sudocode', 'comm': 'https://gitter.im/Ossprojects4dev/sudocode', 'img': 'https://github.com/rahulkumaran.png?size=50'},
{'title': 'Synfig-tests-regressions', 'id': 62, 'btnid': 1062, 'intro': 'Suite to analyze regression in synfig renderer', 'intro_full': 'Suite to analyze regression in synfig renderer', 'mentor': 'Konstantin Dmitriev ', 'mentor_email': 'ksee.zelgadis@gmail.com', 'tag': ['Shell'], 'link': 'https://github.com/synfig/synfig-tests-regressions', 'comm': 'irc://irc.freenode.net/synfig', 'img': 'https://github.com/synfig.png?size=50'},
{'title': 'TWERP', 'id': 63, 'btnid': 1063, 'intro': 'Tethering Wiki to ERP', 'intro_full': 'Tethering Wiki to ERP', 'mentor': 'Ayush Kaushal ', 'mentor_email': 'ayushk4@gmail.com', 'tag': ['Python', 'Python3', 'Bot', 'Wiki', 'Automation', 'Metakgp'], 'link': 'https://github.com/metakgp/twerp', 'comm': 'metakgp.slack.com', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'TodXpy', 'id': 64, 'btnid': 1064, 'intro': 'A simple and easy to use yet configurable CLI todo app.', 'intro_full': 'A simple and easy to use yet configurable CLI todo app.', 'mentor': 'Aditya Vikram Singh', 'mentor_email': 'xypnox@gmail.com', 'tag': ['Python', 'Makefile', 'Python3', 'Cli', 'Website', 'Todo', 'Todoapp', 'Easy-to-use', 'Pip'], 'link': 'https://github.com/xypnox/todxpy/', 'comm': 'https://gitter.im/todxpy/Lobby', 'img': 'https://github.com/xypnox.png?size=50'},
{'title': 'Tvseries', 'id': 65, 'btnid': 1065, 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and shows it all in one single place, with a bet...", 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and shows it all in one single place, with a better user-friendly navigation UI.", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Javascript', 'Html', 'Css', 'Ruby', 'Shell', 'Scraping', 'Imdb-link', 'Ruby-script', 'Tv-series'], 'link': 'https://github.com/athityakumar/tvseries', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'Tweet-Chat-App', 'id': 66, 'btnid': 1066, 'intro': 'It is simple tweet-chat-app where you chat and also tweet as you have doing in twitter.', 'intro_full': 'It is simple tweet-chat-app where you chat and also tweet as you have doing in twitter.', 'mentor': 'Alok Kumar', 'mentor_email': 'ialoksingh0@gmail.com', 'tag': ['Javascript', 'Html', 'Css'], 'link': 'https://github.com/iFlameing/Tweet-Chat-App', 'comm': 'https://gitter.im/Tweet-Chat-App/Lobby?source=orgpage', 'img': 'https://github.com/iFlameing.png?size=50'},
{'title': 'Vault Scanner', 'id': 67, 'btnid': 1067, 'intro': 'Scanner for pentesters.', 'intro_full': 'Scanner for pentesters.', 'mentor': 'Abhishek Sharma', 'mentor_email': 'abhishek_official@hotmail.com', 'tag': ['Python'], 'link': 'https://github.com/abhisharma404/vault_scanner', 'comm': 'https://gitter.im/vault_scanner/kwoc', 'img': 'https://github.com/abhisharma404.png?size=50'},
{'title': 'WIMP', 'id': 68, 'btnid': 1068, 'intro': 'Get the timetable of IIT Kharagpur Professors', 'intro_full': 'Get the timetable of IIT Kharagpur Professors', 'mentor': 'Navaneeth Suresh', 'mentor_email': 'navaneeths1998@gmail.com', 'tag': ['Roff', 'Python', 'Html', 'Dockerfile', 'Javascript', 'Erp', 'Timetable', 'Flask-application', 'Python3'], 'link': 'https://github.com/metakgp/wimp/', 'comm': 'https://groups.google.com/forum/#!forum/wimp-devel', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'Wallgen', 'id': 69, 'btnid': 1069, 'intro': 'A wallpaper generator', 'intro_full': 'A wallpaper generator', 'mentor': 'Subhrajit Prusty', 'mentor_email': 'subhrajit1997@gmail.com', 'tag': ['Python', 'Dockerfile', 'Wallpaper', 'Hq-poly-wallpapers'], 'link': 'https://github.com/SubhrajitPrusty/wallgen', 'comm': 'https://gitter.im/wallgen/', 'img': 'https://github.com/SubhrajitPrusty.png?size=50'},
{'title': 'What Slot', 'id': 70, 'btnid': 1070, 'intro': 'A website to organize your time table for additional courses and minor.', 'intro_full': 'A website to organize your time table for additional courses and minor.', 'mentor': 'Arnav Tiwari', 'mentor_email': 'avznav@gmail.com', 'tag': ['Python', 'Html', 'Javascript', 'Website', 'Javscript', 'Backend-webdevelopment', 'Front-end-development', 'Flask'], 'link': 'https://github.com/arnav-t/what-slot', 'comm': 'https://gitter.im/WhatSlotChat/', 'img': 'https://github.com/arnav-t.png?size=50'},
{'title': 'epurifier', 'id': 71, 'btnid': 1071, 'intro': 'A KISS(Keep It Stupid Simple) email validator for csv files', 'intro_full': 'A KISS(Keep It Stupid Simple) email validator for csv files', 'mentor': 'Aditya Vikram Singh', 'mentor_email': 'xypnox@gmail.com', 'tag': ['Python', 'Makefile', 'Csv', 'Email-purifier', 'Website', 'Pip'], 'link': 'https://github.com/xypnox/email_purifier', 'comm': 'https://gitter.im/epurifier/Lobby', 'img': 'https://github.com/xypnox.png?size=50'},

    ];

    var searchRes = cards;

    function findMatches(wordToMatch, cards) {
        if (wordToMatch === '') {
            return cards;
        } else {
            var options = {
              findAllMatches: true,
              threshold: 0.4,
              location: 0,
              distance: 100,
              maxPatternLength: 50,
              minMatchCharLength: 1,
              keys: [
                "intro_full",
                "link",
                "tag",
                "title",
                "mentor"
            ]
            };
            var fuse = new Fuse(cards, options);
            var result = fuse.search(wordToMatch);
            return result;
        }
    }

    var isEqual = function (value, other) {

        // Get the value type
        var type = Object.prototype.toString.call(value);

        // If the two objects are not the same type, return false
        if (type !== Object.prototype.toString.call(other)) return false;

        // If items are not an object or array, return false
        if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

        // Compare the length of the length of the two items
        var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
        var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
        if (valueLen !== otherLen) return false;

        // Compare two items
        var compare = function (item1, item2) {

            // Get the object type
            var itemType = Object.prototype.toString.call(item1);

            // If an object or array, compare recursively
            if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
                if (!isEqual(item1, item2)) return false;
            }

            // Otherwise, do a simple comparison
            else {

                // If the two items are not the same type, return false
                if (itemType !== Object.prototype.toString.call(item2)) return false;

                // Else if it's a function, convert to a string and compare
                // Otherwise, just compare
                if (itemType === '[object Function]') {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }

            }
        };

        // Compare properties
        if (type === '[object Array]') {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }

        // If nothing failed, return true
        return true;

    };


    var searchInput = $('.searchTerm');
    function displayMatches() {
        var matchArray = findMatches(searchInput.val(), cards)
        if(!isEqual(searchRes, matchArray)) {
            searchRes = matchArray
            displayRes()
        }
    };

    searchInput.keyup(displayMatches);

    function displayRes() {
        var str = "";
      $.each(searchRes , function(k,v){
        var list="";
        var i = 0;
        var tagcolor = "#8e44ad";
        var len = v.tag.length;
        for(i = 0; i<len; i++){
          tagcolor = langColor[v.tag[i]] || randcolors[Math.floor(Math.random()*randcolors.length)]
          list +='<li style="background: '+tagcolor+'" >\
              <div class="tag click-to-search">'+v.tag[i]+'</div>\
            </li>';
        }

        str +='<div class="cards">\
            <div class="card-item">\
              <div class="card-info">\
                <h2 class="card-title">'+v.title+'</h2>\
                <p class="card-intro">'+v.intro+'</p>\
            </div>\
            <div class="mentor"><p>Mentored by : <span>'+v.mentor+'</span></p></div>\
            <form id="form">\
          <ul class="tags custom">'+list+'\
          </ul>\
        </form>\
        <div class="wrap">\
             <a href="#" onclick="return false;" class="button2" id="'+v.btnid+'" class="modal-btn">Details</a>\
         </div>\
            </div>\
          </div>\
          <div class="modal" id="'+v.id+'">\
            <div class="modal-content">\
              <div class="modal-header">\
                <h3 class="header-title"><i class><img src="'+v.img+'" height="50" width="50"></i>'+'<a target="_blank" href="'+v.link+'">'+v.title+'</a>'+'</h3>\
                <div class="close fa fa-close"></div>\
              </div>\
              <div class="modal-body">\
                <p>'+v.intro_full+'</p>\
                <ul class="tags custom"><span class="icon-pricetags i-extra-small-box"></span>'+list+'\
                </ul>\
                <ul class="qwe">\
                <span>Mentor(s) : </span>\
                  <li>\
                    <div class="tag">'+v.mentor+' ( '+v.mentor_email+' ) '+'</div>\
                  </li>\
                </ul>\
               <ul class="qwe">\
                <span>Communication channel : </span>\
                  <li>\
                    <div class="tag comm" style="word-break: break-all;">'+v.comm+'</div>\
                  </li>\
                </ul>\
              </div>\
              <div class="modal-footer">\
                 <a href="'+v.link+'" target="_blank" " class="highlight-button-dark btn btn-round button xs-margin-bottom-five">\
                 </i><span>View Project</span></a>\
              </div>\
            </div>\
          </div>';

      });

      $('.container2').html(str);

      var btnno, no;
      var modBtn, modal, close,modContent;
      $('.button2').click(function() {
           btnno = $(this).attr('id');
           no = btnno - 1000;
           console.log(btnno);
           console.log(no);
           modBtn  = $('#' + btnno);
           modal  = $('#' + no);
           console.log(modBtn);
           close   = modal.find('.close'),
           modContent = modal.find('.modal-content');
           modal.css('display', 'block');
           modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
        });

        // close modal when click on close button or somewhere out the modal content
        $(document).on('click', function(e) {
          var target = $(e.target);
          if(target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
              modal.css('display', 'none');
              next();
            });
          }
        });

    // When a tag is clicked, it goes to the search bar
    function onTagClick() {
        let tagText = this.innerText;
        searchInput.val(tagText)
        displayMatches()
    }

    v = $('.tag.click-to-search')
    v.click(onTagClick)

    v.css("cursor", "pointer")


    }

    displayRes();

});
