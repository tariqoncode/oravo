<p align="center">
  <img src="/public/favicon-32x32.png" alt="Oravo Logo" width="100">
</p>

<h1 align="center">Oravo</h1>

<p align="center">
  <i>Oravo is a modern, privacy-focused analytics platform powered by AI.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status" />
  <img src="https://img.shields.io/badge/Version-3.0.0-blue" alt="Version" />
</p>

---

## 🚀 Getting Started

Welcome to Oravo - your privacy-focused analytics solution!

---

## 🛠 Installing from Source

### Requirements

- A server with Node.js version 18.18 or newer
- A database. Oravo supports [PostgreSQL](https://www.postgresql.org/) (minimum v12.14) databases.

### Get the Source Code and Install Packages

```bash
git clone <your-repository-url>
cd oravo
pnpm install
```

### Configure Oravo

Create an `.env` file with the following:

```bash
DATABASE_URL=connection-url
```

The connection URL format:

```bash
postgresql://username:mypassword@localhost:5432/mydb
```

### Build the Application

```bash
pnpm run build
```

_The build step will create tables in your database if you are installing for the first time. It will also create a login user with username **admin** and password **oravo**._

### Start the Application

```bash
pnpm run start
```

_By default, this will launch the application on `http://localhost:3000`. You will need to either [proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly._

---

## 🐳 Installing with Docker

To build the Oravo container and start up a Postgres database, run:

```bash
docker compose up -d
```

---

## 🔄 Getting Updates

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

```bash
git pull
pnpm install
pnpm run build
```

To update the Docker image, simply pull the new images and rebuild:

```bash
docker compose pull
docker compose up --force-recreate -d
```

---

## 🛟 Support

<p align="center">
  <a href="mailto:oravo@imoogleai.xyz">
    <img src="https://img.shields.io/badge/Email-oravo@imoogleai.xyz-blue?style=social&logo=gmail" alt="Email" />
  </a>
  <a href="https://oravo.imoogleai.xyz">
    <img src="https://img.shields.io/badge/Website-oravo.imoogleai.xyz-blue?style=social&logo=web" alt="Website" />
  </a>
</p>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 About Oravo

Oravo is a modern, privacy-focused analytics platform that combines the power of AI with user-friendly analytics. Built with performance and privacy in mind, Oravo provides comprehensive insights while respecting user privacy.
