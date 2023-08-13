from flask import Flask, Response, request
import openai
import os
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def generate():
    openai.api_key = os.getenv('OPENAI_KEY')

    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
        {
          "role": "user",
          "content": f"Please generate one sentence of a joke in Japanese."
        }
      ],
      temperature=1,
      max_tokens=256,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )

    result = json.dumps(response.choices[0].message.content.strip(), ensure_ascii=False)
    return Response(result, content_type='application/json; charset=utf-8')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)
