#!/bin/bash
set -e

# Perform any necessary pre-startup actions here
echo "Starting Nginx server..."

# Start Nginx in the foreground
exec nginx -g "daemon off;"
