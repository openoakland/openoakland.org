FROM ruby:3.3.11

COPY . /code
WORKDIR /code
RUN make setup

CMD ["bash"]
