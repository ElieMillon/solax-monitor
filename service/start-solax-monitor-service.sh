#!/bin/bash

# Move to working directory
cd /home/pi/solax-monitor/

# Run Angular
ng serve --port 4500 &

sleep 3

DISPLAY=:0
until ! xrandr | grep '\bconnected\b'
do
    sleep 5
done

# Open browser on first display
# We disable security to make requests on solax inverter
DISPLAY=:0 chromium-browser --kiosk --disable-web-security --disable-site-isolation-for-policy http://localhost:4500
