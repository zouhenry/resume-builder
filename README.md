This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a simple app for generating resumes from JSON data.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Create your own resume by updating ```config/resume.json```.

When printing to PDF, please make sure ```Background graphics``` print option is checked (tested on Chrome for Mac). It should print full page without margin.


TODOs:
1. Create JSON editor => real time update on resume
2. Allow multi-page resumes
3. Create multiple resume templates
4. Create CSS edition
5. Add section configuration
6. Add user friendly form editor