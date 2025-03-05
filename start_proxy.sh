docker run --rm -it \
    -v ~/.mitmproxy:/home/mitmproxy/.mitmproxy \
    -v $(pwd):/data \
    -p 8080:8080 \
    --name mitmproxy \
    mitmproxy/mitmproxy
