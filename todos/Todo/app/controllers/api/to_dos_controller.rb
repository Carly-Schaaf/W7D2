class Api::ToDosController < ApplicationController

  def show
    render json: ToDo.find(params[:id])
  end

  def index
    render json: ToDo.all
  end

  def create
    @todo = ToDo.new(todo_params)

    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = ToDo.find(params[:id])

    if @todo.update
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = ToDo.find(params[:id])
    @todo.destroy
  end

  private

  def todo_params
    params.require(:to_do).permit(:title, :body, :done)
  end
end
