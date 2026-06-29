from flask import Flask, request, jsonify
from flask_cors import CORS
from gemini import generate_plan

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "🚀 TaskGuardian AI Backend is Running!"
    })


@app.route("/generate-plan", methods=["POST"])
def planner():
    try:
        data = request.get_json()

        goal = data.get("goal", "")

        if not goal:
            return jsonify({"error": "Goal is required"}), 400

        plan = generate_plan(goal)

        return jsonify({"plan": plan})

    except Exception as e:
        print("========== GEMINI ERROR ==========")
        print(repr(e))
        print("==================================")

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)