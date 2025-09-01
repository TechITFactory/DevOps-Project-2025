from app.chatbot import chatbot

def test_chatbot_response():
    answer = chatbot.ask("This shop sells laptops and phones.", "What do they sell?")
    assert isinstance(answer, str)
    assert len(answer) > 0
