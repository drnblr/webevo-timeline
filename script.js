    const groups = new vis.DataSet([
      {
        id: "frontend",
        content: "FRONTEND",
        className: "frontend"
      },
      {
        id: "backend",
        content: "BACKEND",
        className: "backend"
      }
    ]);

  // Just incase you need to know, i copy pasted the first block 28 times then i seperated and filled in the info..
const events = [
  // ERA 1: THE HYPERTEXT WEB
  {
    id: 1, group: "frontend", start: "1989-03-01",
    content: "Web Proposal",
    title: "Tim Berners-Lee's Web Proposal",
    year: "1989",
    execution: "A proposal at CERN for a linked information system; this was a design proposal, not yet a browser application.",
    problem: "Researchers needed a way to connect information across different computers and documents.",
    tradeoff: "The idea required shared protocols, document formats, browsers, and servers before it could become a widely usable Web."
  },
  {
    id: 2, group: "frontend", start: "1990-12-01",
    content: "WorldWideWeb / Nexus",
    title: "The First Web Browser",
    year: "1990",
    execution: "The WorldWideWeb browser-editor ran on a NeXT computer. It was later renamed Nexus to avoid confusion with the Web itself.",
    problem: "It let users view and edit hypertext documents connected by links.",
    tradeoff: "It initially ran on a limited platform, restricting access until browsers became available on more systems."
  },
  {
    id: 3, group: "backend", start: "1991-01-01",
    content: "Static HTTP Servers",
    title: "The Static File Era",
    year: "Early 1990s",
    execution: "An HTTP server on a remote computer returned stored HTML documents and image files to browser clients.",
    problem: "Static delivery made it possible to publish information to many remote users using a simple request-response model.",
    tradeoff: "Content was mostly fixed files. Personalization, form processing, and database-driven pages required server-side programming."
  },
  {
    id: 4, group: "frontend", start: "1993-04-01",
    content: "NCSA Mosaic",
    title: "The Graphical Browser Breakthrough",
    year: "1993",
    execution: "Mosaic ran on the user's computer and displayed text and inline images in a graphical interface.",
    problem: "It made the Web easier to explore and helped bring web browsing to a much wider audience.",
    tradeoff: "Richer pages increased demands on network bandwidth and browser rendering."
  },

  // ERA 2: BROWSER WARS AND DYNAMIC WEB
  {
    id: 5, group: "frontend", start: "1994-12-01",
    content: "Netscape Navigator",
    title: "Netscape Navigator",
    year: "1994",
    execution: "Navigator ran on users' computers, interpreting HTML and displaying web content.",
    problem: "It brought a popular, commercially supported browser to a growing public Web.",
    tradeoff: "Competition encouraged rapid feature development, sometimes resulting in incompatible browser-specific behavior."
  },
  {
    id: 6, group: "backend", start: "1995-01-01",
    content: "Apache HTTP Server",
    title: "Apache and Web Server Growth",
    year: "1995 onward",
    execution: "The HTTP server ran on the server operating system and handled incoming web requests.",
    problem: "Flexible, extensible web serving helped websites handle growing demand for pages and resources.",
    tradeoff: "Serving files alone was insufficient for personalized applications, creating demand for dynamic server execution."
  },
  {
    id: 7, group: "frontend", start: "1995-08-01",
    content: "Internet Explorer 1.0",
    title: "The First Browser War",
    year: "1995",
    execution: "Internet Explorer 1.0 ran on Windows computers as a client-side browser.",
    problem: "It gave Microsoft Windows users another way to access the growing Web and intensified browser competition.",
    tradeoff: "Competing browser implementations and proprietary features made cross-browser compatibility more difficult."
  },
  {
    id: 8, group: "frontend", start: "1995-09-01",
    content: "JavaScript",
    title: "JavaScript and Dynamic Interfaces",
    year: "1995",
    execution: "JavaScript executes in a browser's JavaScript engine.",
    problem: "It enabled client-side form validation and dynamic interaction without sending every action to the server.",
    tradeoff: "Browser differences, client-side security risks, and increasingly complex user-interface logic created new challenges."
  },
  {
    id: 9, group: "backend", start: "1995-06-01",
    content: "CGI",
    title: "Common Gateway Interface",
    year: "Mid-1990s",
    execution: "CGI programs execute on the server; a common model launches a separate process for each request.",
    problem: "CGI allowed server programs to generate responses using form data, application logic, and other information.",
    tradeoff: "Repeated process creation and teardown added overhead, especially when request traffic increased."
  },
  {
    id: 10, group: "backend", start: "1996-01-01",
    content: "FastCGI / mod_php",
    title: "Persistent Workers and Server Modules",
    year: "Mid-to-late 1990s",
    execution: "FastCGI can keep application workers running between requests; in-process modules such as mod_php execute within the web-server process.",
    problem: "Reusing workers or executing through server modules reduced the overhead of starting a fresh CGI process for every request.",
    tradeoff: "Persistent workers and in-process modules introduced lifecycle, configuration, isolation, and resource-management concerns."
  },
  {
    id: 11, group: "backend", start: "1999-01-01",
    content: "J2EE, ASP.NET, LAMP",
    title: "Enterprise Web Applications",
    year: "Late 1990s–2000s",
    execution: "Application code ran in server runtimes and web-server processes, often connected to databases.",
    problem: "These stacks supported larger dynamic websites, business logic, sessions, and database-backed services.",
    tradeoff: "More complex stacks consumed operational resources and still had to manage concurrency, deployment, and reliability."
  },

  // ERA 3: OPEN STANDARDS AND WEB 2.0
  {
    id: 12, group: "frontend", start: "2002-01-01",
    content: "Mozilla Firefox",
    title: "Firefox and the Open Web",
    year: "2002–2004",
    execution: "Firefox ran on the client device, interpreting web standards and executing browser-side scripts.",
    problem: "It offered an alternative browser and helped advance competition and support for open web standards.",
    tradeoff: "Developers still had to test across multiple browsers and deal with differences in standards support."
  },
  {
    id: 13, group: "frontend", start: "2005-02-01",
    content: "AJAX",
    title: "Asynchronous JavaScript and XML",
    year: "Early–mid-2000s",
    execution: "Browser JavaScript sent background HTTP requests and updated parts of the page.",
    problem: "AJAX enabled data to be fetched without reloading the entire page, making web applications feel more responsive.",
    tradeoff: "Asynchronous requests created new challenges around loading states, errors, ordering, and synchronization."
  },
  {
    id: 14, group: "frontend", start: "2006-01-01",
    content: "jQuery",
    title: "DOM Manipulation Libraries",
    year: "2006",
    execution: "jQuery was a JavaScript library downloaded to and executed in the browser.",
    problem: "It simplified DOM manipulation, event handling, and common cross-browser scripting tasks.",
    tradeoff: "Large applications could accumulate complex DOM updates and dependencies, encouraging more structured UI approaches."
  },
  {
    id: 15, group: "backend", start: "2000-01-01",
    content: "C10K Problem",
    title: "Thread-per-Request Bottlenecks",
    year: "Late 1990s–2000s",
    execution: "Server operating systems and application runtimes handled concurrent connections using threads, processes, or event-driven designs.",
    problem: "Thread-based runtimes made concurrent application development familiar and straightforward.",
    tradeoff: "Thousands of heavyweight threads could consume large amounts of memory and scheduling time. The C10K problem highlighted the difficulty of serving many simultaneous connections."
  },

  // ERA 4: V8, SINGLE-PAGE APPS AND DISTRIBUTED SERVICES
  {
    id: 16, group: "frontend", start: "2008-09-01",
    content: "Chrome and V8",
    title: "Google Chrome and the V8 Engine",
    year: "2008",
    execution: "Chrome executes JavaScript in V8 within the browser.",
    problem: "Improved JavaScript execution helped support richer, more demanding browser applications.",
    tradeoff: "Faster code execution did not eliminate memory use, security concerns, or complex frontend architecture."
  },
  {
    id: 17, group: "backend", start: "2009-05-01",
    content: "Node.js / libuv",
    title: "Event-Loop Server Execution",
    year: "2009",
    execution: "Node.js executes JavaScript on the server and uses an event loop with libuv for asynchronous I/O.",
    problem: "It enabled servers to manage many I/O-heavy connections without requiring a dedicated heavyweight thread for every connection.",
    tradeoff: "CPU-intensive tasks can block the event loop unless moved to other workers or processes."
  },
  {
    id: 18, group: "backend", start: "2009-11-01",
    content: "Go and Goroutines",
    title: "Lightweight Concurrent Execution",
    year: "2009 onward",
    execution: "Go code runs in a compiled program with a runtime that schedules goroutines across operating-system threads.",
    problem: "Goroutines made it practical to organize many concurrent tasks with relatively lightweight execution contexts.",
    tradeoff: "Concurrency still requires careful synchronization, error handling, and resource limits."
  },
  {
    id: 19, group: "frontend", start: "2013-05-01",
    content: "React",
    title: "Component-Based User Interfaces",
    year: "2013",
    execution: "React primarily runs in the browser to render component-based interfaces, although it can also render on the server.",
    problem: "A component model helped developers organize complex interfaces and update views as application data changed.",
    tradeoff: "Client-rendered applications can ship large JavaScript bundles and require careful state, accessibility, and performance management."
  },
  {
    id: 20, group: "frontend", start: "2014-01-01",
    content: "Angular and Vue",
    title: "Modern Frontend Frameworks",
    year: "2014 onward",
    execution: "Angular and Vue run in the browser for client-side interfaces and can also be used in server-rendering architectures.",
    problem: "They provide reusable components and tools for building and maintaining complex applications.",
    tradeoff: "Framework learning curves, application complexity, dependencies, and build tooling can increase development costs."
  },
  {
    id: 21, group: "backend", start: "2013-03-01",
    content: "Docker",
    title: "Containerization",
    year: "2013",
    execution: "Containers run isolated application processes on a host operating system while sharing its kernel.",
    problem: "Containers package application dependencies and help keep development and deployment environments consistent.",
    tradeoff: "Containers do not remove the need for security updates, orchestration, networking, and resource management."
  },
  {
    id: 22, group: "backend", start: "2014-01-01",
    content: "Microservices",
    title: "Distributed Service Architecture",
    year: "2014 onward",
    execution: "Application functions run as separate networked services across server processes or machines.",
    problem: "Independent services can be developed, deployed, and scaled separately.",
    tradeoff: "Network failures, service coordination, monitoring, and distributed data consistency become more difficult."
  },

  // ERA 5: MODERN FRONTEND AND HYBRID BACKEND
  {
    id: 23, group: "frontend", start: "2020-01-01",
    content: "Chromium Edge",
    title: "Microsoft Edge Adopts Chromium",
    year: "2020",
    execution: "The Chromium-based Edge browser runs web content on the user's device.",
    problem: "Using Chromium aligned Edge more closely with a widely used browser engine and its web compatibility model.",
    tradeoff: "A shared engine does not eliminate all browser differences, privacy concerns, or the need for cross-browser testing."
  },
  {
    id: 24, group: "frontend", start: "2020-01-01",
    content: "Progressive Web Apps",
    title: "Progressive Web Apps (PWAs)",
    year: "Modern era",
    execution: "PWAs use browser APIs and JavaScript; service workers can handle caching and certain background tasks.",
    problem: "They can provide installable, app-like experiences and selected offline capabilities using web technologies.",
    tradeoff: "Capabilities differ across browsers and devices, while caching, updates, and offline data consistency need careful design."
  },
  {
    id: 25, group: "backend", start: "2020-01-01",
    content: "Next.js SSR",
    title: "Server-Side Rendering Returns",
    year: "Modern era",
    execution: "A server renders a page into HTML before sending it to the browser; frameworks such as Next.js can combine server and client rendering.",
    problem: "Server-rendered HTML can improve initial content delivery and support search indexing for appropriate applications.",
    tradeoff: "Server rendering adds compute costs and requires careful caching, data fetching, and hydration management."
  },
  {
    id: 26, group: "backend", start: "2020-01-01",
    content: "Jamstack",
    title: "Static Generation and API-Driven Sites",
    year: "Modern era",
    execution: "Pages can be generated during a build and served as static assets, with dynamic features supplied by APIs or serverless services.",
    problem: "Prebuilt pages can reduce per-request server work and work well with content delivery networks.",
    tradeoff: "Content updates, personalization, build duration, and cache invalidation require planning."
  },
  {
    id: 27, group: "backend", start: "2020-01-01",
    content: "WebAssembly / WASI",
    title: "WebAssembly Beyond the Browser",
    year: "Modern era",
    execution: "WebAssembly modules execute in compatible runtimes; WASI provides standardized interfaces for supported system operations.",
    problem: "Wasm can provide portable execution for compiled code and selected workloads across supported server environments.",
    tradeoff: "Runtime support, system access, debugging, and language interoperability can limit what is practical."
  },
  {
    id: 28, group: "backend", start: "2020-01-01",
    content: "Edge Computing",
    title: "Globally Distributed Edge Compute",
    year: "Modern era",
    execution: "Code executes at distributed infrastructure near users, depending on the platform's runtime and available APIs.",
    problem: "Edge execution can reduce latency for selected requests and support globally distributed delivery.",
    tradeoff: "Runtime limits, regional data consistency, observability, and deployment complexity can become bottlenecks."
  }
];


    const items = new vis.DataSet(
      events.map(event => ({
        ...event,
        className: event.group
      }))
    );

    const container = document.getElementById("timeline");

    
const options = {
     start: "1989-01-01",
     end: "2005-12-31",
     min: "1989-01-01",
     max: "2027-12-31",

     height: "420px",
     horizontalScroll: true,
     verticalScroll: true,
     moveable: true,
     zoomable: true,
     zoomKey: "ctrlKey",

     zoomMin: 1000 * 60 * 60 * 24 * 365 * 2,
     zoomMax: 1000 * 60 * 60 * 24 * 365 * 40,

     selectable: true,
     editable: false,
     stack: true,
     orientation: "top",

     margin: {
       item: {
         horizontal: 25,
         vertical: 18
       },
       axis: 12
     },

     groupOrder: "id"
   };

    const timeline = new vis.Timeline(
      container,
      items,
      groups,
      options
    );

    timeline.on("select", function (properties) {
      if (properties.items.length === 0) return;

      const event = events.find(
        item => item.id === properties.items[0]
      );

      if (!event) return;

      document.getElementById("eventYear").textContent = event.year;
      document.getElementById("eventTitle").textContent = event.title;
      document.getElementById("execution").textContent = event.execution;
      document.getElementById("problem").textContent = event.problem;
      document.getElementById("tradeoff").textContent = event.tradeoff;

      document.getElementById("details").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });

    //extra feature i added later
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  const isLight = document.body.classList.toggle("light-mode");

  themeToggle.textContent = isLight ? "🌙" : "☀️";

  const label = isLight
    ? "Switch to dark mode"
    : "Switch to light mode";

  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.setAttribute("aria-pressed", String(isLight));
});