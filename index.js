import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk/+esm";

OBR.onReady(() => {
  console.log("Cinematics extension loaded!");

  OBR.contextMenu.create({
    id: "cinematic-launch",
    icons: [{ icon: "", label: "Play Cinematic" }],
    onClick() {
      OBR.broadcast.sendMessage("cinematic:play", { url: "https://example.com/video.mp4" });
    }
  });

  OBR.broadcast.onMessage("cinematic:play", (data) => {
    console.log("Cinematic received:", data.url);
  });
});
