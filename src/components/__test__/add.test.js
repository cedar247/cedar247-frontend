import ArcLogic from '../../components/Chart_Components/Logic/ArcLogic'

  
describe('Check the Arc Chart Logic', () => {
    it('expect the expected algorithm result to calculated result', () => {
        
        const Arc_data = [["Colombo","Galle",100],["Colombo","Kandy",20],["Kandy","Galle",120],["Colombo","Rathnapura",50],["Kandy","Rathnapura",89],["Rathnapura",'Kurunegala',300],["Galle","Rathnapura",70],['Kurunegala',"Jaffna",300]];
        const result = [[ 'Colombo', 'Kandy', 'Rathnapura', 'Galle', 'Kurunegala' ], [ 'Jaffna' ],[100,  20, 120,  50, 89, 300,  70, 300 ], [ 'Colombo', 'Kandy', 'Rathnapura', 'Galle', 'Kurunegala', 'Jaffna' ],6];
        const Result_logic = ArcLogic(Arc_data)      
        expect(Result_logic).toEqual(result)
    });
    it('expect the expected algorithm result to calculated result', () => {
        
        const Arc_data =[['mars','venus',100],['venus','mars',25],['venus','earth',299],['earth','mars',200],['mars','jupiter',500],['jupiter','venus',200],['venus','mercury',100],['mercury','venus',50],['earth','jupiter',200],['jupiter','mercury',800],['venus','jupiter',100],['neptune','pluto',200],['pluto','mars',800],['satum','neptune',100],['satum','venus',130],['earth','pluto',200],['mercury','earth',300],['neptune','venus',200],['venus','neptune',300],['pluto','neptune',400]];
        const result = [ [ "mars", "venus", "earth", "jupiter", "mercury", "neptune", "pluto", "satum" ], [], [ 100, 25, 299, 200, 500, 200, 100, 50, 200, 800, 100, 200, 800, 100, 130, 200, 300, 200, 300, 400 ], [ "mars", "venus", "earth", "jupiter", "mercury", "neptune", "pluto", "satum" ], 8 ];
        const Result_logic = ArcLogic(Arc_data)      
        expect(Result_logic).toEqual(result)
    });
})