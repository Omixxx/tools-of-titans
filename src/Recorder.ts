export class Recorder {
    private mediaRecorder: MediaRecorder
    private chunks: Blob[] = [];
    private options = {
        mimeType: "video/webm; codecs=vp9",
        videoBitsPerSecond: 20 * 1024 * 1024, // 10 Mbps
    }

    constructor() {
        const canvasStream = (document.querySelector("canvas") as HTMLCanvasElement).captureStream(144);
        this.mediaRecorder = new MediaRecorder(canvasStream, this.options);

        this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
            if (event.data.size > 0) {
                this.chunks.push(event.data);
            }
        };

        this.mediaRecorder.onstop = () => {
            const blob = new Blob(this.chunks, {type: "video/webm"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "canvas_recording.webm";
            a.click();
            URL.revokeObjectURL(url);
            this.chunks = [];
        };
    }


    public startRecording() {
        if (this.mediaRecorder.state === "inactive") {
            this.mediaRecorder.start();
            console.log("Recording started");
        }

    }

    public stopRecording() {
        if (this.mediaRecorder.state === "recording") {
            this.mediaRecorder.stop();
            console.log("Recording stopped and saved");
        }
    }

}
