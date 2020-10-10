FROM ruby:2.7

COPY . /code
WORKDIR /code
RUN make setup

CMD ["bash"]
