#!/usr/bin/env bash
set -euo pipefail

CERT_DIR="certs"
KEY_FILE="$CERT_DIR/capcons.key"
CERT_FILE="$CERT_DIR/capcons.crt"
VITE_CONFIG="vite.config.ts"

echo "📂 Ensuring cert directory..."
mkdir -p "$CERT_DIR"

if ! command -v mkcert >/dev/null 2>&1; then
  echo "⚠️ mkcert not found. Installing..."
  
  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    if command -v apt >/dev/null 2>&1; then
      sudo apt update
      sudo apt install -y libnss3-tools curl
      curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
      chmod +x mkcert-v*-linux-amd64
      sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert
    elif command -v yum >/dev/null 2>&1; then
      sudo yum install -y nss-tools curl
      curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
      chmod +x mkcert-v*-linux-amd64
      sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert
    else
      echo "❌ Please install mkcert manually: https://github.com/FiloSottile/mkcert"
      exit 1
    fi
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    if command -v brew >/dev/null 2>&1; then
      brew install mkcert nss
    else
      echo "❌ Homebrew not found. Please install mkcert manually: https://github.com/FiloSottile/mkcert"
      exit 1
    fi
  else
    echo "❌ Unsupported OS. Please install mkcert manually: https://github.com/FiloSottile/mkcert"
    exit 1
  fi
fi

echo "mkcert binary: $(command -v mkcert)"

echo "🔑 Ensuring mkcert root CA is installed..."
mkcert -install

echo "🔐 Generating certificate..."
mkcert -key-file "$KEY_FILE" -cert-file "$CERT_FILE" localhost 127.0.0.1 ::1

echo "✅ Certificates generated:"
echo " - $CERT_FILE"
echo " - $KEY_FILE"
 