# Stop any existing Node.js processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# Start the backend server
Write-Host "Starting backend server..."
node server.js
