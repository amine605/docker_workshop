FROM  node
LABEL Maintainer="Docker Workshop"
WORKDIR /app
COPY ./app/* ./
RUN npm install
ENV STAGE  dev		 
EXPOSE 3000
CMD ["node","server.js"]