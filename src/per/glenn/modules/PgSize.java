package per.glenn.modules;

public enum PgSize {
	SMALL (9, 9, 10),
	MEDIUM (16, 16, 40),
	LARGE (16, 30, 100);
	
	private int row;
	private int column;
	private int minesNum;
	
	PgSize(int row, int column, int minesNum){
		this.row = row;
		this.column = column;
		this.minesNum = minesNum;
	}
	
	public int getRow(){
		return this.row;
	}
	
	public int getColumn(){
		return this.column;
	}
	
	public int getMinesNum(){
		return this.minesNum;
	}

}
