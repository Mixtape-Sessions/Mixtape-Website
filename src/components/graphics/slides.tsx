import { createSignal, For } from "solid-js";
import * as htmlToImage from 'html-to-image';
import sessions from "../../../public/data/sessions";

function ReactiveExample() {
  const formats = [
    {
      name: "16/9",
      width: "1080px",
      height: "607.5px",
    },
    {
      name: "4/3",
      width: "1080px",
      height: "810px",
    },
    {
      name: "2/1",
      width: "1080px",
      height: "540px",
    },
  ];

  const [selected, setSelected] = createSignal(sessions[0]);
  const [format, setFormat] = createSignal(formats[0]);
  const [subtitle, setSubtitle] = createSignal("Mixtape Session");
  const readSubtitleInput = (e) => setSubtitle(e.currentTarget.value);

  const downloadImage = () => {
    const graphic = document.getElementById('graphic');
    htmlToImage
      .toPng(graphic, {
        width: parseInt(format().width),
        height: parseInt(format().height),
      })
      .then(function (dataUrl) {
        var link = document.createElement("a")
        link.download = `${selected().id}.png`
        link.href = dataUrl
        link.click()
      })
  }

  return (
    <>
      {/* Input controls */}
      <div class="w-72 flex flex-col gap-y-2 my-12">
        <select
          class="grow bg-white rounded-lg shadow-md cursor-default focus:outline-none border-sun-400 border-2 sm:text-sm py-2 pl-3 pr-10 font-medium font-marker"
          onChange={(e) =>
            setSelected(
              sessions.filter(
                (session) => session.title == e.currentTarget.value
              )[0]
            )
          }
        >
          <For each={sessions}>
            {(session) => <option>{session.title}</option>}
          </For>
        </select>
        <select
          class="grow bg-white rounded-lg shadow-md cursor-default focus:outline-none border-sun-400 border-2 sm:text-sm py-2 pl-3 pr-10 font-medium font-marker"
          onChange={(e) => {
            setFormat(
              formats.filter(
                (format) => format.name == e.currentTarget.value
              )[0]
            );
          }}
        >
          <For each={formats}>{(format) => <option>{format.name}</option>}</For>
        </select>
        <input
          class="grow bg-white rounded-lg shadow-md cursor-default focus:outline-none border-sun-400 border-2 sm:text-sm py-2 pl-3 pr-10 font-medium font-marker"
          value={subtitle()}
          onKeyUp={readSubtitleInput}
        >
          {subtitle()}
        </input>
        <button onClick={downloadImage}>Download</button>
      </div>

      {/* Image */}
      <div
        class="bg-slate-50"
        style={{
          width: `${format().width}`,
          height: `${format().height}`,
        }}
        id="graphic"
      >
        <div class={`h-3 ${selected().buttonGradient}`}></div>
        <div class="h-full pt-16 pb-12 flex flex-col justify-between">
          <div class="">
            <div class="text-center">
              <h2
                class={`inline-block tracking-tight font-extrabold text-gray-900 text-[4.5rem] px-8 leading-[5.5rem] text-gradient ${
                  selected().buttonGradient
                }`}
              >
                {selected().title}
              </h2>
              <h3 class="mt-2 text-[3rem] text-slate-800 font-marker">
                {subtitle()}
              </h3>
            </div>
          </div>

          <div class="flex flex-col space-y-2 items-center">
            {/* <div class="mx-auto w-48 border-t-2 border-mine-shaft-400 mb-4"></div> */}
            <div class="flex flex-row items-center gap-x-4">
              <svg
                class="flex-shrink-0 w-24"
                viewBox="0 0 4512 4382"
                style="fill-rule: evenodd; clip-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 1.15854;"
              >
                <circle
                  cx="-7855.33"
                  cy="1470.29"
                  r="638.159"
                  class="fill-current text-[#ffaf18]"
                  transform="matrix(2.98075 0 0 2.98075 25725.058 -2083.604)"
                ></circle>
                <circle
                  cx="-7855.33"
                  cy="1470.29"
                  r="638.159"
                  style="fill: none; stroke: #000; stroke-width: 37.74px"
                  transform="matrix(2.98075 0 0 2.98075 25564.65 -2258.717)"
                ></circle>
                <path
                  style="fill: none; stroke: #fff; stroke-width: 52.62px"
                  d="M-8337.97 1305.97h411.442v2.232h-411.442z"
                  transform="matrix(1.6474 -1.64788 -1.36242 -1.36203 15882.729 -9782.02)"
                ></path>
                <path
                  style="fill: none; stroke: #fff; stroke-width: 68.28px"
                  d="M-8337.97 1305.97h411.442v2.232h-411.442z"
                  transform="matrix(1.6474 -1.64788 -.0009 -.0009 15544.329 -12147.225)"
                ></path>
                <path
                  style="fill: none; stroke: #fff; stroke-width: 92.8px"
                  d="M-8337.97 1305.97h411.442v2.232h-411.442z"
                  transform="matrix(1.21207 -1.21241 -.0009 -.0009 12168.288 -8300.037)"
                ></path>
                <path
                  d="m-7826.29 1596.07-121.11 119.53v147.37c0 20.69 121.11 128.09 121.11 107.4v-374.3Z"
                  class="fill-current text-[#ff3881]"
                  transform="translate(25319.901 -2291.773) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.29 1596.07-121.11 119.53v147.37c0 20.69 121.11 128.09 121.11 107.4v-374.3Z"
                  style="fill: none; stroke: #000; stroke-width: 36.59px"
                  transform="translate(25200.171 -2351.92) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.31 1644.85-121.09-129.3v527.7c37.73 14.18 77.9 22.8 120.92 24.94l.17-423.34Z"
                  class="fill-current text-[#ff3881]"
                  transform="translate(26146.38 -2291.773) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.31 1644.85-121.09-129.3v527.7c37.73 14.18 77.9 22.8 120.92 24.94l.17-423.34Z"
                  style="fill: none; stroke: #000; stroke-width: 36.59px"
                  transform="translate(26026.648 -2351.92) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.29 1493.56-121.11 119.52v455.11c42.12-4.93 82.65-15.24 121.11-32.61v-542.02Z"
                  class="fill-current text-[#ff3881]"
                  transform="translate(26972.857 -2291.773) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.29 1493.56-121.11 119.52v455.11c42.12-4.93 82.65-15.24 121.11-32.61v-542.02Z"
                  style="fill: none; stroke: #000; stroke-width: 36.59px"
                  transform="translate(26853.127 -2351.92) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.29 1232.49-121.11 119.52v607.89c49.15-29.85 88.87-68.07 121.11-112.95v-614.46Z"
                  class="fill-current text-[#ff3881]"
                  transform="translate(27799.336 -2291.773) scale(3.07497)"
                ></path>
                <path
                  d="m-7826.29 1232.49-121.11 119.52v607.89c49.15-29.85 88.87-68.07 121.11-112.95v-614.46Z"
                  style="fill: none; stroke: #000; stroke-width: 36.59px"
                  transform="translate(27679.605 -2351.92) scale(3.07497)"
                ></path>
                <path
                  d="m-7825.88 1071.77 73.62-2.49-135.39-131.662-137.79 137.352 78.13-2.16.13 752.95-318.31 12.6 11.79 534.35c46.09 35.99 95.22 56.69 146.86 64.7l-15.13-473.99 297.89-6.81-1.8-884.84Z"
                  class="fill-current text-[#00b7ff]"
                  transform="rotate(46.155 -6891.433 35168.787) scale(3.07497)"
                ></path>
                <path
                  d="m-7825.88 1071.77 73.62-2.49-135.39-131.662-137.79 137.352 78.13-2.16.13 752.95-318.31 12.6 11.79 534.35c46.09 35.99 95.22 56.69 146.86 64.7l-15.13-473.99 297.89-6.81-1.8-884.84Z"
                  style="fill: none; stroke: #000; stroke-width: 36.59px"
                  transform="rotate(46.155 -6880.715 34998.209) scale(3.07497)"
                ></path>
                <path
                  style="fill: none; stroke: #000; stroke-width: 52.62px"
                  d="M-8337.97 1305.97h411.442v2.232h-411.442z"
                  transform="matrix(1.6474 -1.64788 -1.36242 -1.36203 15762.99 -9842.166)"
                ></path>
                <path
                  style="fill: none; stroke: #000; stroke-width: 68.28px"
                  d="M-8337.97 1305.97h411.442v2.232h-411.442z"
                  transform="matrix(1.6474 -1.64788 -.0009 -.0009 15424.59 -12207.371)"
                ></path>
                <path
                  style="fill: none; stroke: #000; stroke-width: 92.8px"
                  d="M-8337.97 1305.97h411.442v2.232h-411.442z"
                  transform="matrix(1.21207 -1.21241 -.0009 -.0009 12048.549 -8360.184)"
                ></path>
              </svg>
              {/* <p class="text-3xl tracking-tight text-slate-700 font-marker">
                Mixtape Sessions 
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactiveExample;
